/* eslint-disable react/prop-types */
const PracticalExperienceLists = (props) => {
  return (
    <div>
      <h3>Edit Experience</h3>
      {props.practicalExperiences.map((practicalExperience) => (
        <form onSubmit={(e) => e.preventDefault()} key={practicalExperience.id}>
          <input type="text" value={practicalExperience.companyName} />
          <input type="text" value={practicalExperience.position} />
          <input type="text" value={practicalExperience.durationAtCompany} />
          <input type="text" value={practicalExperience.companyLocation} />
          <input type="textarea" value={practicalExperience.description} />
        </form>
      ))}
    </div>
  );
};
export default PracticalExperienceLists;
