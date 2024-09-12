import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/context';

const ViewBusiness = () => {
  const [business, setBusiness] = useState({});
  const { id } = useParams();
  const { token, errorToast, successToast, isLoggedIn, backendUrl } =
    useContext(Context);
  const navigate = useNavigate();

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
        successToast('Business fetched successfully.');
      } else {
        errorToast('Failed to fetch business details');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBusiness();
  }, []);

  if (isLoggedIn) {
    return (
      <section className="business-sec-card">
        <img src={business.imageUrl} alt="business-image" width="70%" />
        <h3>Name: {business.businessName} </h3>
        <h5>Operating Hours</h5>
        <div>
          <span>Opening Time: {business.openingTime} </span>
          <span>Closing Time: {business.closingTime} </span>
        </div>
        <h5>Contact Details</h5>
        <div>
          <span>Phone Number: {business.phoneNumber} </span>
          <span>Email: {business.email} </span>
        </div>
        <p>Category: {business.category} </p>
        <p>Location: {business.location} </p>
        <p>Description: {business.businessDescription} </p>
        <div>
          <span>Created At: {business.createdAt} </span>
          <span>Updated At: {business.updatedAt} </span>
        </div>
        <p>ID: {business._id} </p>
      </section>
    );
  } else {
    navigate('/');
  }
};
export default ViewBusiness;
