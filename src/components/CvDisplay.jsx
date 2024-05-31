/* eslint-disable react/prop-types */
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const CvDisplay = (props) => {
  return (
    <div className="cv-display">
      <section className="personal-details">
        <h3>Personal</h3>
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
            <div className="divider">
              <div className="section-details">
                <h5 className="university-name">
                  {educationExperience.universityName}
                </h5>
                <span>{educationExperience.location}</span>
              </div>
              <div className="section-details">
                <h5 className="qualification-name">
                  {educationExperience.qualification}
                </h5>
                <span>{educationExperience.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="practical-experience">
        <h3>Experience</h3>
        <hr />
        {props.practicalExperiences.map((practicalExperience) => (
          <div
            className="practical-experience-container"
            key={practicalExperience.id}
          >
            <div className="divider">
              <div className="section-details">
                <h5>{practicalExperience.companyName}</h5>
                <span>{practicalExperience.companyLocation}</span>
              </div>
              <div className="section-details">
                <h5>{practicalExperience.position}</h5>
                <span>{practicalExperience.durationAtCompany}</span>
              </div>
            </div>
            <div className="duties-description">
              <small>{practicalExperience.description}</small>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CvDisplay;
