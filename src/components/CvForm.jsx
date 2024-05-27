/* eslint-disable react/prop-types */
import { IoIosArrowDown } from 'react-icons/io';
import { FaUserGraduate } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa6';

const CvForm = (props) => {
  return (
    <div className="cv-form">
      <h3 className="add-experience">Personal Information</h3>
      <form onSubmit={(e) => e.preventDefault()}>
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
      <div className="add-experience">
        <div className="add-experience-header">
          <FaUserGraduate />
          <h3>Education</h3>
          <IoIosArrowDown />
        </div>
        <div className="add-experience-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="universityName">University:</label>
            <input
              type="text"
              name="universityName"
              id="universityName"
              placeholder="University name..."
            />
            <label htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              name="qualification"
              id="qualification"
              placeholder="Qualification name..."
            />
            <label htmlFor="duration">Duration:</label>
            <input type="text" name="duration" id="duration" />
            <button className="save-education-btn">Save</button>
          </form>
        </div>
      </div>
      <div className="add-experience">
        <div className="add-experience-header">
          <FaBriefcase />
          <h3>Practical Experience</h3>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default CvForm;
