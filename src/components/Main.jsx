import CvDisplay from './CvDisplay';
import CvForm from './CvForm';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: 'Simphiwe Dladla',
    email: 'simphiwedladla8@gmail.com',
    phoneNumber: '+27732434548',
    location: 'Mpumalanga, South Africa',
  });

  const [educationExperiences, setEducationExperiences] = useState([
    {
      id: uuidv4(),
      universityName: 'The Odin Project University',
      qualification: 'Frontend Developer',
      location: 'www.theodinproject.com',
      duration: '02/2022 - 05/2024',
    },
  ]);

  const addEducationExperiences = (experience) =>
    setEducationExperiences([...educationExperiences, experience]);

  return (
    <main>
      <CvForm
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        addEducationExperiences={addEducationExperiences}
      />
      <CvDisplay
        personalDetails={personalDetails}
        educationExperiences={educationExperiences}
      />
    </main>
  );
};

export default Main;
