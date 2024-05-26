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

  return (
    <main>
      <CvForm
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <CvDisplay personalDetails={personalDetails} />
    </main>
  );
};

export default Main;
