/* eslint-disable react/prop-types */
import { IoIosArrowDown } from 'react-icons/io';
import { FaBriefcase } from 'react-icons/fa6';

const PracticalExperience = () => {
  return (
    <section className="practical-experience-section">
      <div className="practical-heading-container section-heading-container">
        <FaBriefcase />
        <h3>Practical Experience</h3>
        <IoIosArrowDown />
      </div>
      <div className="form-container">
        <form
          className="practicalExperience-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="companyName">Company:</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            placeholder="Company name..."
            // value={companyName}
            // onChange={(e) => setCompanyName(e.target.value)}
          />
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Position..."
            // value={position}
            // onChange={(e) => setPosition(e.target.value)}
          />
          <label htmlFor="companyLocation">Company Location:</label>
          <input
            type="text"
            name="companyLocation"
            id="companyLocation"
            placeholder="Company Location..."
            // value={companyLocation}
            // onChange={(e) => setCompanyLocation(e.target.value)}
          />
          <label htmlFor="durationAtCompany">Duration At Company:</label>
          <input
            type="text"
            name="durationAtCompany"
            id="durationAtCompany"
            placeholder="Duration At Company..."
            // value={durationAtCompany}
            // onChange={(e) => setDurationAtCompany(e.target.value)}
          />
          <label htmlFor="description">Duties Description:</label>
          <input
            type="textarea"
            name="description"
            id="description"
            placeholder="Duties Description..."
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
          />
          <button
            // onClick={handleAddPracticalExperience}
            className="save-education-btn"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default PracticalExperience;
