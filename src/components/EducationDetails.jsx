import { FaUserGraduate } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const EducationDetails = () => {
  return (
    <section className="education-section">
      <div className="education-header-container section-heading-container">
        <FaUserGraduate />
        <h3>Education</h3>
        <IoIosArrowDown />
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
            // value={universityName}
            // onChange={(e) => setUniversityName(e.target.value)}
          />
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            name="qualification"
            id="qualification"
            placeholder="Qualification name..."
            // value={qualification}
            // onChange={(e) => setQualification(e.target.value)}
          />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location..."
            value={location}
            // onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            name="duration"
            id="duration"
            placeholder="Duration..."
            // value={duration}
            // onChange={(e) => setDuration(e.target.value)}
          />
          <button
            // onClick={handleAddExperience}
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
