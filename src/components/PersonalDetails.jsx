/* eslint-disable react/prop-types */

import { IoAddCircle } from 'react-icons/io5';
import { IoPerson } from 'react-icons/io5';

const PersonalDetails = (props) => {
  return (
    <section className="personal-section">
      <div className="personal-heading-container section-heading-container">
        <IoPerson />
        <h3>Personal</h3>
        <IoAddCircle
          className="display-form-icon icon"
          onClick={() => {
            document
              .querySelector('.personal-details-form')
              .classList.toggle('active');
          }}
        />
      </div>
      <div className="form-container">
        <form
          className="personal-details-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={props.personalDetails.name}
            placeholder="Type your full name..."
            onChange={(e) =>
              props.setPersonalDetails({
                ...props.personalDetails,
                name: e.target.value,
              })
            }
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={props.personalDetails.email}
            placeholder="Type your email..."
            onChange={(e) =>
              props.setPersonalDetails({
                ...props.personalDetails,
                email: e.target.value,
              })
            }
          />
          <label htmlFor="phone-number">Phone number:</label>
          <input
            type="tel"
            name="phone-number"
            id="phone-number"
            value={props.personalDetails.phoneNumber}
            placeholder="Type your phone number..."
            onChange={(e) =>
              props.setPersonalDetails({
                ...props.personalDetails,
                phoneNumber: e.target.value,
              })
            }
          />
          <label htmlFor="address">Location:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={props.personalDetails.location}
            placeholder="Type your address..."
            onChange={(e) =>
              props.setPersonalDetails({
                ...props.personalDetails,
                location: e.target.value,
              })
            }
          />
        </form>
      </div>
    </section>
  );
};

export default PersonalDetails;
