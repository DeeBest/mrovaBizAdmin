/* eslint-disable react/prop-types */
import { FaCog } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';

const QualificationLists = (props) => {
  return (
    <>
      {props.educationExperiences.map((educationExperience) => (
        <div className="qualifications-list" key={educationExperience.id}>
          <h5>
            <RiDeleteBinFill
              className="icon delete-icon"
              onClick={() =>
                props.deleteEducationExperience(educationExperience.id)
              }
            />{' '}
            {educationExperience.universityName}{' '}
            <FaCog
              onClick={() => props.EditQualification(educationExperience.id)}
              className="icon"
            />
          </h5>
          <form
            className="edit-qualification-form active"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              value={educationExperience.universityName}
              onChange={(e) => {
                console.log(e.value);
              }}
            />
            <input
              type="text"
              value={educationExperience.qualification}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <input
              type="text"
              value={educationExperience.location}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <input
              type="text"
              value={educationExperience.duration}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <button className="update-qualification-btn">Update</button>
          </form>
        </div>
      ))}
    </>
  );
};

export default QualificationLists;
