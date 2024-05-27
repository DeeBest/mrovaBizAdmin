import CvDisplay from './CvDisplay';
import CvForm from './CvForm';
import { useState } from 'react';

const Main = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: 'Simphiwe Dladla',
    email: 'simphiwedladla8@gmail.com',
    phoneNumber: '+27732434548',
    location: 'Mpumalanga, South Africa',
  });

  const [qualifications, setQualifications] = useState({
    universityName: 'The Odin Projects University',
    qualificationName: 'Frontend Developer',
    duration: '05/2022 - Present',
    location: 'www.theodinproject.com',
  });

  return (
    <main>
      <CvForm
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        qualifications={qualifications}
        setQualifications={setQualifications}
      />
      <CvDisplay
        personalDetails={personalDetails}
        qualifications={qualifications}
      />
    </main>
  );
};

export default Main;
