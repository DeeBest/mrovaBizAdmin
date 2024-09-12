import { useContext, useState } from 'react';
import { Context } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const AddBusiness = () => {
  const [newBusiness, setNewBusiness] = useState({
    businessName: '',
    category: '',
    phoneNumber: '',
    email: '',
    location: '',
    openingTime: '',
    closingTime: '',
    businessDescription: '',
    imageUrl: '',
  });
  const [image, setImage] = useState(false);
  const { fetchBusinesses, successToast, errorToast, token, isLoggedIn } =
    useContext(Context);
  const navigate = useNavigate();

  const handleAddBusiness = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('businessImage', image);

    try {
      const postImage = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await postImage.json();

      const response = await fetch(
        'http://localhost:5000/api/businesses/add-business',
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
        setNewBusiness({
          businessName: '',
          category: '',
          phoneNumber: '',
          email: '',
          location: '',
          openingTime: '',
          closingTime: '',
          businessDescription: '',
          imageUrl: '',
        });
        setImage(false);
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
          <label htmlFor="category">Business Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            minLength={3}
            maxLength={40}
            required
            placeholder="Business Category"
            value={newBusiness.category}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, category: e.target.value })
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
            value={newBusiness.email}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, email: e.target.value })
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
            value={newBusiness.phoneNumber}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, phoneNumber: e.target.value })
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
            value={newBusiness.location}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, location: e.target.value })
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
            value={newBusiness.openingTime}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, openingTime: e.target.value })
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
            value={newBusiness.closingTime}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, closingTime: e.target.value })
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
            value={newBusiness.businessDescription}
            onChange={(e) =>
              setNewBusiness({
                ...newBusiness,
                businessDescription: e.target.value,
              })
            }
          />
          <label htmlFor="businessImage">Business Image:</label>
          <input
            type="file"
            accept="image/*"
            name="businessImage"
            id="businessImage"
            required
            // value={newBusiness.imageUrl}
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="Business Image"
          />
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
