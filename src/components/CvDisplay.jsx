import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const CvDisplay = () => {
  return (
    <div className="cv-display">
      <section className="general-information">
        <div className="img-container">
          <img src="./src/assets/images/profile-pic1.jpg" alt="cv image" />
        </div>
        <div className="personal-details">
          <h3>General Information</h3>
          <p>Simphiwe Dladla</p>
          <div>
            <MdOutlineEmail />
            <p>simphiwedladla8@gmail.com</p>
          </div>
          <div>
            <FiPhone />
            <p>+27732434548</p>
          </div>
          <div>
            <IoLocationOutline />
            <p>Mpumalanga, South Africa</p>
          </div>
        </div>
      </section>
      <section className="educational-experience">
        <h3>Education</h3>
        <p>Simphiwe Dladla</p>
        <p>simphiwedladla8@gmail.com</p>
        <p>+27732434548</p>
        <p>Mpumalanga, South Africa</p>
      </section>
      <section className="practical-experience">
        <h3>Practical Experience</h3>
        <p>Simphiwe Dladla</p>
        <p>simphiwedladla8@gmail.com</p>
        <p>+27732434548</p>
        <p>Mpumalanga, South Africa</p>
      </section>
    </div>
  );
};

export default CvDisplay;
