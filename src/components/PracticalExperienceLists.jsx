/* eslint-disable react/prop-types */
import { FaCog } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useState } from 'react';

const PracticalExperienceList = (props) => {
  const [editingExperience, setEditingExperience] = useState(null);

  const handleEditClick = (experience) => {
    setEditingExperience(experience);
  };

  const handleUpdateExperience = (id, field, value) => {
    const updatedExperiences = props.practicalExperiences.map((experience) =>
      experience.id === id ? { ...experience, [field]: value } : experience
    );
    props.setPracticalExperiences(updatedExperiences);
  };

  return (
    <>
      {props.practicalExperiences.map((practicalExperience) => (
        <div className="experiences-list" key={practicalExperience.id}>
          <h5>
            <RiDeleteBinFill
              className="icon delete-icon"
              onClick={() =>
                props.deletePracticalExperience(practicalExperience.id)
              }
            />{' '}
            {practicalExperience.companyName}{' '}
            <FaCog
              onClick={() => {
                handleEditClick(practicalExperience);
              }}
              className="icon"
            />
          </h5>
          {editingExperience &&
            editingExperience.id === practicalExperience.id && (
              <form
                className="edit-experience-form active"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEditingExperience(null);
                }}
              >
                <input
                  type="text"
                  value={practicalExperience.companyName}
                  onChange={(e) =>
                    handleUpdateExperience(
                      practicalExperience.id,
                      'companyName',
                      e.target.value
                    )
                  }
                />
                <input
                  type="text"
                  value={practicalExperience.position}
                  onChange={(e) =>
                    handleUpdateExperience(
                      practicalExperience.id,
                      'position',
                      e.target.value
                    )
                  }
                />
                <input
                  type="text"
                  value={practicalExperience.companyLocation}
                  onChange={(e) =>
                    handleUpdateExperience(
                      practicalExperience.id,
                      'companyLocation',
                      e.target.value
                    )
                  }
                />
                <input
                  type="text"
                  value={practicalExperience.durationAtCompany}
                  onChange={(e) =>
                    handleUpdateExperience(
                      practicalExperience.id,
                      'durationAtCompany',
                      e.target.value
                    )
                  }
                />
                <textarea
                  value={practicalExperience.description}
                  onChange={(e) =>
                    handleUpdateExperience(
                      practicalExperience.id,
                      'description',
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

export default PracticalExperienceList;
