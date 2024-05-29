/* eslint-disable react/prop-types */
import { FaCog } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';

const PracticalExperienceLists = (props) => {
  return (
    <>
      {props.practicalExperiences.map((practicalExperience) => (
        <div className="experiences-list" key={practicalExperience.id}>
          <h5>
            <RiDeleteBinFill
              className="delete-icon icon"
              onClick={() =>
                props.deletePracticalExperience(practicalExperience.id)
              }
            />{' '}
            {practicalExperience.companyName} <FaCog className="icon" />
          </h5>
          <form className="active" onSubmit={(e) => e.preventDefault()}>
            <input type="text" value={practicalExperience.companyName} />
            <input type="text" value={practicalExperience.position} />
            <input type="text" value={practicalExperience.durationAtCompany} />
            <input type="text" value={practicalExperience.companyLocation} />
            <textarea value={practicalExperience.description} />
            <button className="update-experience-btn">Update</button>
          </form>
        </div>
      ))}
    </>
  );
};
export default PracticalExperienceLists;
