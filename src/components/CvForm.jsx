/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import QualificationLists from './QualificationLists';
import PracticalExperienceLists from './PracticalExperienceLists';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';
import PracticalExperience from './PracticalExperience';

const CvForm = (props) => {
  const [universityName, setUniversityName] = useState('');
  const [qualification, setQualification] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');

  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [durationAtCompany, setDurationAtCompany] = useState('');
  const [description, setDescription] = useState('');

  const handleAddExperience = () => {
    const newExperience = {
      id: uuidv4(),
      universityName,
      qualification,
      location,
      duration,
    };

    props.addEducationExperiences(newExperience);
    setUniversityName('');
    setQualification('');
    setLocation('');
    setDuration('');
  };

  const handleAddPracticalExperience = () => {
    const newPracticalExperience = {
      id: uuidv4(),
      companyName,
      position,
      companyLocation,
      durationAtCompany,
      description,
    };

    props.addPracticalExperiences(newPracticalExperience);

    setCompanyName('');
    setPosition('');
    setCompanyLocation('');
    setDurationAtCompany('');
    setDescription('');
  };

  const toggleActiveClass = () => {
    document.querySelector('.add-experience-body').classList.toggle('active');
  };

  return (
    <div className="details-container">
      <PersonalDetails
        setPersonalDetails={props.setPersonalDetails}
        personalDetails={props.personalDetails}
      />
      <EducationDetails />
      <QualificationLists educationExperiences={props.educationExperiences} />
      <PracticalExperience />
      <PracticalExperienceLists
        practicalExperiences={props.practicalExperiences}
      />
    </div>
  );
};

export default CvForm;
