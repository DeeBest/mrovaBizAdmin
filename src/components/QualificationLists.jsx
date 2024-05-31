/* eslint-disable react/prop-types */
import { FaCog } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useState } from 'react';

const QualificationLists = (props) => {
  const [editingExperience, setEditingExperience] = useState(null);

  const handleEditClick = (experience) => {
    setEditingExperience(experience);
  };

  const handleUpdateExperience = (id, field, value) => {
    const updatedExperiences = props.educationExperiences.map((experience) =>
      experience.id === id ? { ...experience, [field]: value } : experience
    );
    props.setEducationExperiences(updatedExperiences);
  };

  return (
    <>
      {props.educationExperiences.map((educationExperience) => (
        <div className="qualifications-list" key={educationExperience.id}>
          <h5>
            <RiDeleteBinFill
              className="icon delete-icon"
              onClick={() =>
                props.deleteEducationExperience(educationExperience.id)
              }
            />{' '}
            {educationExperience.universityName}{' '}
            <FaCog
              onClick={() => {
                handleEditClick(educationExperience);
              }}
              className="icon"
            />
          </h5>
          {editingExperience &&
            editingExperience.id === educationExperience.id && (
              <form
                className="edit-qualification-form active"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEditingExperience(null);
                }}
              >
                <input
                  type="text"
                  value={educationExperience.universityName}
                  onChange={(e) =>
                    handleUpdateExperience(
                      educationExperience.id,
                      'universityName',
                      e.target.value
                    )
                  }
                />
                <input
                  type="text"
                  value={educationExperience.qualification}
                  onChange={(e) =>
                    handleUpdateExperience(
                      educationExperience.id,
                      'qualification',
                      e.target.value
                    )
                  }
                />
                <input
                  type="text"
                  value={educationExperience.location}
                  onChange={(e) =>
                    handleUpdateExperience(
                      educationExperience.id,
                      'location',
                      e.target.value
                    )
                  }
                />
                <input
                  type="text"
                  value={educationExperience.duration}
                  onChange={(e) =>
                    handleUpdateExperience(
                      educationExperience.id,
                      'duration',
                      e.target.value
                    )
                  }
                />
                <button className="update-details-btn">Update</button>
              </form>
            )}
        </div>
      ))}
    </>
  );
};

export default QualificationLists;
