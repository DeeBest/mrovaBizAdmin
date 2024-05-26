const CvForm = () => {
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
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Type your email..."
        />
        <label htmlFor="phone-number">Phone number:</label>
        <input
          type="tel"
          name="phone-number"
          id="phone-number"
          placeholder="Type your phone number..."
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Type your address..."
        />
      </form>
    </>
  );
};

export default CvForm;
