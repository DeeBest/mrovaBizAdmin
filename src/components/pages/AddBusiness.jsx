import { useContext, useState } from 'react';
import { Context } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const categories = [
  'food',
  'rooms',
  'hygiene',
  'finance',
  'mechanics',
  'fashion',
];

const AddBusiness = () => {
  const [newBusiness, setNewBusiness] = useState({
    businessName: '',
    category: categories[0], // Default category
    phoneNumber: '',
    email: '',
    location: '',
    openingTime: '',
    closingTime: '',
    businessDescription: '',
    imageUrl: '',
  });
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const {
    fetchBusinesses,
    successToast,
    errorToast,
    token,
    isLoggedIn,
    backendUrl,
  } = useContext(Context);
  const navigate = useNavigate();

  // Validation function
  const validateForm = () => {
    let validationErrors = {};
    if (!newBusiness.businessName.trim())
      validationErrors.businessName = 'Business name is required.';
    if (!newBusiness.email || !/\S+@\S+\.\S+/.test(newBusiness.email))
      validationErrors.email = 'A valid email is required.';
    if (!newBusiness.phoneNumber || !/^\d+$/.test(newBusiness.phoneNumber))
      validationErrors.phoneNumber =
        'Phone number should contain only numbers.';
    if (!newBusiness.location.trim())
      validationErrors.location = 'Location is required.';
    if (!newBusiness.openingTime.trim())
      validationErrors.openingTime = 'Opening time is required.';
    if (!newBusiness.closingTime.trim())
      validationErrors.closingTime = 'Closing time is required.';
    if (!newBusiness.businessDescription.trim())
      validationErrors.businessDescription = 'Description is required.';
    if (!image) validationErrors.image = 'Business image is required.';

    return validationErrors;
  };

  const handleAddBusiness = async (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    formData.append('businessImage', image);

    try {
      const postImage = await fetch(`${backendUrl}/upload`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await postImage.json();

      const response = await fetch(
        `${backendUrl}/api/businesses/add-business`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...newBusiness, imageUrl: data.imageUrl }),
        }
      );

      if (response.status === 201) {
        successToast('Business successfully added.');
        fetchBusinesses();

        // Reset form state
        setNewBusiness({
          businessName: '',
          category: categories[0],
          phoneNumber: '',
          email: '',
          location: '',
          openingTime: '',
          closingTime: '',
          businessDescription: '',
          imageUrl: '',
        });
        setImage(null);
        setErrors({});
        document.getElementById('businessImage').value = ''; // Clear file input
      } else {
        errorToast('Failed to add business.');
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
            value={newBusiness.businessName}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, businessName: e.target.value })
            }
          />
          {errors.businessName && (
            <span className="error">{errors.businessName}</span>
          )}

          <label htmlFor="category">Business Category:</label>
          <select
            name="category"
            id="category"
            value={newBusiness.category}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, category: e.target.value })
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
            value={newBusiness.email}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, email: e.target.value })
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
            value={newBusiness.phoneNumber}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, phoneNumber: e.target.value })
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
            value={newBusiness.location}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, location: e.target.value })
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
            value={newBusiness.openingTime}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, openingTime: e.target.value })
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
            value={newBusiness.closingTime}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, closingTime: e.target.value })
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
            value={newBusiness.businessDescription}
            onChange={(e) =>
              setNewBusiness({
                ...newBusiness,
                businessDescription: e.target.value,
              })
            }
          />
          {errors.businessDescription && (
            <span className="error">{errors.businessDescription}</span>
          )}

          <label htmlFor="businessImage">Business Image:</label>
          <input
            type="file"
            accept="image/*"
            name="businessImage"
            id="businessImage"
            required
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="Business Image"
          />
          {errors.image && <span className="error">{errors.image}</span>}

          <button type="submit" onClick={handleAddBusiness}>
            Add Business
          </button>
        </form>
      </div>
    );
  } else {
    navigate('/');
  }
};

export default AddBusiness;
