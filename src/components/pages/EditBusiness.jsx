import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Context } from '../../context/context';

const categories = [
  'food',
  'rooms',
  'hygiene',
  'finance',
  'mechanics',
  'fashion',
];

const EditBusiness = () => {
  const [business, setBusiness] = useState({});
  const { id } = useParams();
  const {
    successToast,
    errorToast,
    fetchBusinesses,
    token,
    isLoggedIn,
    backendUrl,
  } = useContext(Context);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const fetchBusiness = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/businesses/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setBusiness(data.business);
      } else {
        errorToast('Failed to fetch business');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBusiness();
  }, []);

  // Validation function
  const validateForm = () => {
    let validationErrors = {};
    if (!business.businessName.trim())
      validationErrors.businessName = 'Business name is required.';
    if (!business.email || !/\S+@\S+\.\S+/.test(business.email))
      validationErrors.email = 'A valid email is required.';
    if (!business.phoneNumber || !/^\d+$/.test(business.phoneNumber))
      validationErrors.phoneNumber =
        'Phone number should contain only numbers.';
    if (!business.location.trim())
      validationErrors.location = 'Location is required.';
    if (!business.openingTime.trim())
      validationErrors.openingTime = 'Opening time is required.';
    if (!business.closingTime.trim())
      validationErrors.closingTime = 'Closing time is required.';
    if (!business.businessDescription.trim())
      validationErrors.businessDescription = 'Description is required.';

    return validationErrors;
  };

  const handleEditBusiness = async (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(
        `${backendUrl}/api/businesses/update-business/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(business),
        }
      );

      if (response.status === 200) {
        successToast('Business updated successfully.');
        fetchBusinesses();
      } else {
        errorToast('Failed to update business.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="add-business-div">
        <form>
          <label htmlFor="businessName">Business Name:</label>
          <input
            type="text"
            name="businessName"
            id="businessName"
            minLength={3}
            maxLength={40}
            required
            placeholder="Business Name"
            value={business.businessName}
            onChange={(e) =>
              setBusiness({ ...business, businessName: e.target.value })
            }
          />
          {errors.businessName && (
            <span className="error">{errors.businessName}</span>
          )}

          <label htmlFor="category">Business Category:</label>
          <select
            name="category"
            id="category"
            value={business.category}
            onChange={(e) =>
              setBusiness({ ...business, category: e.target.value })
            }
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label htmlFor="email">Business Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Business Email"
            value={business.email}
            onChange={(e) =>
              setBusiness({ ...business, email: e.target.value })
            }
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="phoneNumber">Business Phone:</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            required
            placeholder="Business Phone"
            value={business.phoneNumber}
            onChange={(e) =>
              setBusiness({ ...business, phoneNumber: e.target.value })
            }
          />
          {errors.phoneNumber && (
            <span className="error">{errors.phoneNumber}</span>
          )}

          <label htmlFor="location">Business Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            required
            placeholder="Business Location"
            value={business.location}
            onChange={(e) =>
              setBusiness({ ...business, location: e.target.value })
            }
          />
          {errors.location && <span className="error">{errors.location}</span>}

          <label htmlFor="openingTime">Business Opening Time:</label>
          <input
            type="text"
            name="openingTime"
            id="openingTime"
            required
            placeholder="Business Opening Time"
            value={business.openingTime}
            onChange={(e) =>
              setBusiness({ ...business, openingTime: e.target.value })
            }
          />
          {errors.openingTime && (
            <span className="error">{errors.openingTime}</span>
          )}

          <label htmlFor="closingTime">Business Closing Time:</label>
          <input
            type="text"
            name="closingTime"
            id="closingTime"
            required
            placeholder="Business Closing Time"
            value={business.closingTime}
            onChange={(e) =>
              setBusiness({ ...business, closingTime: e.target.value })
            }
          />
          {errors.closingTime && (
            <span className="error">{errors.closingTime}</span>
          )}

          <label htmlFor="businessDescription">Business Description:</label>
          <textarea
            name="businessDescription"
            id="businessDescription"
            required
            placeholder="Business Description"
            value={business.businessDescription}
            onChange={(e) =>
              setBusiness({
                ...business,
                businessDescription: e.target.value,
              })
            }
          />
          {errors.businessDescription && (
            <span className="error">{errors.businessDescription}</span>
          )}

          <button type="submit" onClick={handleEditBusiness}>
            Add Business
          </button>
        </form>
      </div>
    );
  } else {
    navigate('/');
  }
};
export default EditBusiness;
