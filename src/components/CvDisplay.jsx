/* eslint-disable react/prop-types */
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const CvDisplay = (props) => {
  return (
    <div className="cv-display">
      <section className="personal-details">
        <h3>Personal Details</h3>
        <hr />
        <h2>{props.personalDetails.name}</h2>
        <div>
          <MdOutlineEmail className="personal-details-icons" />
          <p>{props.personalDetails.email}</p>
        </div>
        <div>
          <FiPhone className="personal-details-icons" />
          <p>{props.personalDetails.phoneNumber}</p>
        </div>
        <div>
          <IoLocationOutline className="personal-details-icons" />
          <p>{props.personalDetails.location}</p>
        </div>
      </section>
      <section className="educational-experience">
        <h3>Education</h3>
        <hr />
        <div className="qualification-container">
          <div className="qualification-details">
            <h5 className="university-name">
              {props.qualifications.universityName}
            </h5>
            <h5 className="qualification-name">
              {props.qualifications.qualificationName}
            </h5>
          </div>
          <div className="qualification-details">
            <span>{props.qualifications.location}</span>
            <span>{props.qualifications.duration}</span>
          </div>
        </div>
      </section>
      <section className="practical-experience">
        <h3>Practical Experience</h3>
        <hr />
        <p>Simphiwe Dladla</p>
        <p>simphiwedladla8@gmail.com</p>
        <p>+27732434548</p>
        <p>Mpumalanga, South Africa</p>
      </section>
    </div>
  );
};

export default CvDisplay;
