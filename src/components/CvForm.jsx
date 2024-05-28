/* eslint-disable react/prop-types */
import { IoIosArrowDown } from 'react-icons/io';
import { FaUserGraduate } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa6';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

  return (
    <div className="cv-form">
      <h3 className="add-experience">Personal Information</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={props.personalDetails.name}
          placeholder="Type your full name..."
          onChange={(e) =>
            props.setPersonalDetails({
              ...props.personalDetails,
              name: e.target.value,
            })
          }
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={props.personalDetails.email}
          placeholder="Type your email..."
          onChange={(e) =>
            props.setPersonalDetails({
              ...props.personalDetails,
              email: e.target.value,
            })
          }
        />
        <label htmlFor="phone-number">Phone number:</label>
        <input
          type="tel"
          name="phone-number"
          id="phone-number"
          value={props.personalDetails.phoneNumber}
          placeholder="Type your phone number..."
          onChange={(e) =>
            props.setPersonalDetails({
              ...props.personalDetails,
              phoneNumber: e.target.value,
            })
          }
        />
        <label htmlFor="address">Location:</label>
        <input
          type="text"
          name="address"
          id="address"
          value={props.personalDetails.location}
          placeholder="Type your address..."
          onChange={(e) =>
            props.setPersonalDetails({
              ...props.personalDetails,
              location: e.target.value,
            })
          }
        />
      </form>
      <div className="add-experience">
        <div className="add-experience-header">
          <FaUserGraduate />
          <h3>Education</h3>
          <IoIosArrowDown />
        </div>
        <div className="add-experience-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="universityName">University:</label>
            <input
              type="text"
              name="universityName"
              id="universityName"
              placeholder="University name..."
              value={universityName}
              onChange={(e) => setUniversityName(e.target.value)}
            />
            <label htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              name="qualification"
              id="qualification"
              placeholder="Qualification name..."
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              name="duration"
              id="duration"
              placeholder="Duration..."
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <button
              onClick={handleAddExperience}
              className="save-education-btn"
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="add-experience">
        <div className="add-experience-header">
          <FaBriefcase />
          <h3>Practical Experience</h3>
          <IoIosArrowDown />
        </div>
        <div className="add-experience-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="companyName">Company:</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Company name..."
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              name="position"
              id="position"
              placeholder="Position..."
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <label htmlFor="companyLocation">Company Location:</label>
            <input
              type="text"
              name="companyLocation"
              id="companyLocation"
              placeholder="Company Location..."
              value={companyLocation}
              onChange={(e) => setCompanyLocation(e.target.value)}
            />
            <label htmlFor="durationAtCompany">Duration At Company:</label>
            <input
              type="text"
              name="durationAtCompany"
              id="durationAtCompany"
              placeholder="Duration At Company..."
              value={durationAtCompany}
              onChange={(e) => setDurationAtCompany(e.target.value)}
            />
            <label htmlFor="description">Duties Description:</label>
            <input
              type="textarea"
              name="description"
              id="description"
              placeholder="Duties Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              onClick={handleAddPracticalExperience}
              className="save-education-btn"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CvForm;
