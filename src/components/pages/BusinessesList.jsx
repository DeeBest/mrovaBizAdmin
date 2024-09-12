import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';

const BusinessesList = () => {
  const { businesses, fetchBusinesses, successToast, errorToast, isLoggedIn } =
    useContext(Context);
  const navigate = useNavigate();
  const { token, backendUrl } = useContext(Context);

  const handleBusinessDelete = async (id) => {
    try {
      fetch(`${backendUrl}/api/businesses/delete-business/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`,
        },
        credentials: 'include',
      });
      successToast('Deleted Business');

      fetchBusinesses();
    } catch (err) {
      console.log(err);
      errorToast(`Failed to delete business`);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="businesses-list-div">
        {businesses.map((business) => {
          return (
            <div key={business._id} className="business-card">
              <div className="business-card-header">
                <h1>{business.businessName}</h1>
                <img
                  src={business.imageUrl}
                  alt="business-image"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                  }}
                />
              </div>
              <div className="business-card-btns-div">
                <button
                  className="edit-business-btn"
                  onClick={() => navigate(`/edit-business/${business._id}`)}
                >
                  Edit Business
                </button>
                <button
                  className="view-business-btn"
                  onClick={() => navigate(`/view-business/${business._id}`)}
                >
                  View Business
                </button>
                <button
                  className="delete-business-btn"
                  onClick={() => handleBusinessDelete(business._id)}
                >
                  Delete Business
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    navigate('/');
  }
};
export default BusinessesList;
