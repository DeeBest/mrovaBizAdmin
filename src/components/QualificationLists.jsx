/* eslint-disable react/prop-types */
import { FaCog } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';

const QualificationLists = (props) => {
  return (
    <ul>
      {props.educationExperiences.map((educationExperience) => (
        <div key={educationExperience.id}>
          <h5>
            <RiDeleteBinFill /> {educationExperience.universityName} <FaCog />
          </h5>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* <input type="text" value={practicalExperience.companyName} /> */}
            {/* <input type="text" value={practicalExperience.position} />
            <input type="text" value={practicalExperience.durationAtCompany} />
            <input type="text" value={practicalExperience.companyLocation} />
            <input type="textarea" value={practicalExperience.description} /> */}
          </form>
        </div>
      ))}
    </ul>
  );
};

export default QualificationLists;
