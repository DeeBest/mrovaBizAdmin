import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import CvDisplay from './CvDisplay';
import CvForm from './CvForm';

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
    {
      id: uuidv4(),
      universityName: 'University Of Pretoria',
      qualification: 'Bachelor Of Business Administration',
      location: 'Pretoria, South Africa',
      duration: '02/2014 - 05/2018',
    },
    {
      id: uuidv4(),
      universityName: 'Youtube University',
      qualification: 'Forex Trader',
      location: 'www.youtube.com',
      duration: '02/2018 - Present',
    },
  ]);

  const [practicalExperiences, setPracticalExperiences] = useState([
    {
      id: uuidv4(),
      companyName: 'WebsBySimphiwe',
      position: 'Frontend Developer',
      companyLocation: 'Mpumalanga, South Africa',
      durationAtCompany: '06/2023 - Present',
      description:
        'Developing, building and maintaining cool websites and web applications.',
    },
    {
      id: uuidv4(),
      companyName: 'Freelance',
      position: 'Websites Developer',
      companyLocation: 'www.freelance.com',
      durationAtCompany: '02/2023 - Present',
      description: 'Freelancing to clients seeking websites or web apps.',
    },
    {
      id: uuidv4(),
      companyName: 'Forex Markets',
      position: 'Trader',
      companyLocation: 'Metatrader',
      durationAtCompany: '06/2018 - Present',
      description:
        'Trading stocks, trading foreign exchange currencies and volatility indexes.',
    },
  ]);

  const addEducationExperiences = (experience) =>
    setEducationExperiences([...educationExperiences, experience]);

  const addPracticalExperiences = (experience) =>
    setPracticalExperiences([...practicalExperiences, experience]);

  const deleteEducationExperience = (id) => {
    const newList = educationExperiences.filter(
      (experience) => experience.id !== id
    );
    setEducationExperiences(newList);
  };

  const deletePracticalExperience = (id) => {
    const newList = practicalExperiences.filter(
      (experience) => experience.id !== id
    );
    setPracticalExperiences(newList);
  };

  const downloadPDF = () => {
    const input = document.querySelector('.cv-display');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('cv.pdf');
      })
      .catch((err) => console.error('Failed to generate PDF', err));
  };

  return (
    <main>
      <CvForm
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        addEducationExperiences={addEducationExperiences}
        addPracticalExperiences={addPracticalExperiences}
        educationExperiences={educationExperiences}
        setEducationExperiences={setEducationExperiences}
        practicalExperiences={practicalExperiences}
        setPracticalExperiences={setPracticalExperiences}
        deleteEducationExperience={deleteEducationExperience}
        deletePracticalExperience={deletePracticalExperience}
      />
      <CvDisplay
        personalDetails={personalDetails}
        educationExperiences={educationExperiences}
        practicalExperiences={practicalExperiences}
      />
      <button className="download-cv-btn" onClick={downloadPDF}>
        Download CV as PDF
      </button>
    </main>
  );
};

export default Main;
