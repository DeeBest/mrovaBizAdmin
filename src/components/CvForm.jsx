/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import QualificationLists from './QualificationLists';
import PracticalExperienceLists from './PracticalExperienceLists';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';
import PracticalExperience from './PracticalExperience';

const CvForm = (props) => {
  const [educationDetails, setEducationDetails] = useState({
    universityName: '',
    qualification: '',
    location: '',
    duration: '',
  });

  const [experienceDetails, setExperienceDetails] = useState({
    companyName: '',
    position: '',
    companyLocation: '',
    durationAtCompany: '',
    description: '',
  });

  const handleAddExperience = () => {
    const newExperience = {
      id: uuidv4(),
      universityName: educationDetails.universityName,
      qualification: educationDetails.qualification,
      location: educationDetails.location,
      duration: educationDetails.duration,
    };

    props.addEducationExperiences(newExperience);

    setEducationDetails({
      universityName: '',
      qualification: '',
      location: '',
      duration: '',
    });
  };

  const handleAddPracticalExperience = () => {
    const newPracticalExperience = {
      id: uuidv4(),
      companyName: experienceDetails.companyName,
      position: experienceDetails.position,
      companyLocation: experienceDetails.companyLocation,
      durationAtCompany: experienceDetails.durationAtCompany,
      description: experienceDetails.description,
    };

    props.addPracticalExperiences(newPracticalExperience);

    setExperienceDetails({
      companyName: '',
      position: '',
      companyLocation: '',
      durationAtCompany: '',
      description: '',
    });
  };

  return (
    <div className="details-container">
      <PersonalDetails
        setPersonalDetails={props.setPersonalDetails}
        personalDetails={props.personalDetails}
      />
      <EducationDetails
        educationDetails={educationDetails}
        setEducationDetails={setEducationDetails}
        handleAddExperience={handleAddExperience}
      />
      <QualificationLists educationExperiences={props.educationExperiences} />
      <PracticalExperience
        experienceDetails={experienceDetails}
        setExperienceDetails={setExperienceDetails}
        handleAddPracticalExperience={handleAddPracticalExperience}
      />
      <PracticalExperienceLists
        practicalExperiences={props.practicalExperiences}
      />
    </div>
  );
};

export default CvForm;
