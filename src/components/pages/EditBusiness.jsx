import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Context } from '../../context/context';

const EditBusiness = () => {
  const [business, setBusiness] = useState({});
  const { id } = useParams();
  const { successToast, errorToast, fetchBusinesses, token, isLoggedIn } =
    useContext(Context);
  const navigate = useNavigate();

  const fetchBusiness = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/businesses/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

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

  const handleEditBusiness = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/businesses/update-business/${id}`,
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
          <label htmlFor="category">Business Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            minLength={3}
            maxLength={40}
            required
            placeholder="Business Category"
            value={business.category}
            onChange={(e) =>
              setBusiness({ ...business, category: e.target.value })
            }
          />
          <label htmlFor="email">Business Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            minLength={3}
            maxLength={40}
            required
            placeholder="Business Email"
            value={business.email}
            onChange={(e) =>
              setBusiness({ ...business, email: e.target.value })
            }
          />
          <label htmlFor="phoneNumber">Business Phone:</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            minLength={3}
            maxLength={40}
            required
            placeholder="Business Phone"
            value={business.phoneNumber}
            onChange={(e) =>
              setBusiness({ ...business, phoneNumber: e.target.value })
            }
          />
          <label htmlFor="location">Business Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            minLength={3}
            maxLength={40}
            required
            placeholder="Business Location"
            value={business.location}
            onChange={(e) =>
              setBusiness({ ...business, location: e.target.value })
            }
          />
          <label htmlFor="openingTime">Business Opening Time:</label>
          <input
            type="text"
            name="openingTime"
            id="openingTime"
            minLength={3}
            maxLength={40}
            required
            placeholder="Business Opening Time"
            value={business.openingTime}
            onChange={(e) =>
              setBusiness({ ...business, openingTime: e.target.value })
            }
          />
          <label htmlFor="closingTime">Business Closing Time:</label>
          <input
            type="text"
            name="closingTime"
            id="closingTime"
            minLength={3}
            maxLength={40}
            required
            placeholder="Business Closing Time"
            value={business.closingTime}
            onChange={(e) =>
              setBusiness({ ...business, closingTime: e.target.value })
            }
          />
          <label htmlFor="businessDescription">Business Description:</label>
          <textarea
            name="businessDescription"
            id="businessDescription"
            minLength={3}
            maxLength={300}
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
          <button type="submit" onClick={handleEditBusiness}>
            Update Business
          </button>
        </form>
      </div>
    );
  } else {
    navigate('/');
  }
};
export default EditBusiness;
