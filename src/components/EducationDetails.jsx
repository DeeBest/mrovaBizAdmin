/* eslint-disable react/prop-types */

import { FaUserGraduate } from 'react-icons/fa';
import { IoAddCircle } from 'react-icons/io5';

const EducationDetails = (props) => {
  return (
    <section className="education-section">
      <div className="education-header-container section-heading-container">
        <FaUserGraduate />
        <h3>Education</h3>
        <IoAddCircle
          onClick={() => {
            document
              .querySelector('.educationDetails-form')
              .classList.toggle('active');
          }}
        />
      </div>
      <div className="form-container">
        <form
          className="educationDetails-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="universityName">University:</label>
          <input
            type="text"
            name="universityName"
            id="universityName"
            placeholder="University name..."
            value={props.educationDetails.universityName}
            onChange={(e) =>
              props.setEducationDetails({
                ...props.educationDetails,
                universityName: e.target.value,
              })
            }
          />
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            name="qualification"
            id="qualification"
            placeholder="Qualification name..."
            value={props.educationDetails.qualification}
            onChange={(e) =>
              props.setEducationDetails({
                ...props.educationDetails,
                qualification: e.target.value,
              })
            }
          />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location..."
            value={props.educationDetails.location}
            onChange={(e) =>
              props.setEducationDetails({
                ...props.educationDetails,
                location: e.target.value,
              })
            }
          />
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            name="duration"
            id="duration"
            placeholder="Duration..."
            value={props.educationDetails.duration}
            onChange={(e) =>
              props.setEducationDetails({
                ...props.educationDetails,
                duration: e.target.value,
              })
            }
          />
          <button
            onClick={props.handleAddExperience}
            className="save-education-btn"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default EducationDetails;
