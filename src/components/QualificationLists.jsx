/* eslint-disable react/prop-types */
const QualificationLists = (props) => {
  return (
    <ul>
      {props.educationExperiences.map((educationExperience) => (
        <li key={educationExperience.id}>
          <input value={educationExperience.universityName} />
        </li>
      ))}
    </ul>
  );
};

export default QualificationLists;
