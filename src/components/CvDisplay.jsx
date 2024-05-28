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
        {props.educationExperiences.map((educationExperience) => (
          <div key={educationExperience.id} className="qualification-container">
            <div className="qualification-details">
              <h5 className="university-name">
                {educationExperience.universityName}
              </h5>
              <h5 className="qualification-name">
                {educationExperience.qualification}
              </h5>
            </div>
            <div className="qualification-details">
              <span>{educationExperience.location}</span>
              <span>{educationExperience.duration}</span>
            </div>
          </div>
        ))}
      </section>
      <section className="practical-experience">
        <h3>Practical Experience</h3>
        <hr />
        <div className="company&position qualification-details">
          <h5>WebsBySimphiwe</h5>
          <h5>Web Developer</h5>
        </div>
        <div className="location&duration qualification-details">
          <span>Mpumalanga, South Africa</span>
          <span>02/2024 - Present</span>
        </div>
        <div className="duties-description" style={{ marginTop: '5px' }}>
          <small>Developing cool websites and web applications.</small>
        </div>
      </section>
    </div>
  );
};

export default CvDisplay;
