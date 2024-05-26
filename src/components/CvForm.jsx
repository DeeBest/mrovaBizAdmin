/* eslint-disable react/prop-types */
const CvForm = (props) => {
  return (
    <>
      <form className="cv-form" onSubmit={(e) => e.preventDefault()}>
        <h3>Personal Information</h3>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
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
          placeholder="Type your phone number..."
          onChange={(e) =>
            props.setPersonalDetails({
              ...props.personalDetails,
              phoneNumber: e.target.value,
            })
          }
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Type your address..."
          onChange={(e) =>
            props.setPersonalDetails({
              ...props.personalDetails,
              location: e.target.value,
            })
          }
        />
      </form>
    </>
  );
};

export default CvForm;
