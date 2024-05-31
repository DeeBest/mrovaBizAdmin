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
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              onChange={(e) => console.log(e.target.value)}
              type="text"
              value={practicalExperience.companyName}
            />
            <input
              onChange={(e) => console.log(e.target.value)}
              type="text"
              value={practicalExperience.position}
            />
            <input
              onChange={(e) => console.log(e.target.value)}
              type="text"
              value={practicalExperience.durationAtCompany}
            />
            <input
              onChange={(e) => console.log(e.target.value)}
              type="text"
              value={practicalExperience.companyLocation}
            />
            <textarea
              onChange={(e) => console.log(e.target.value)}
              value={practicalExperience.description}
            />
            <button className="update-experience-btn">Update</button>
          </form>
        </div>
      ))}
    </>
  );
};
export default PracticalExperienceLists;
