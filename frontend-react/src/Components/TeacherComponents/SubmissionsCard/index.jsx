import React, { useState } from 'react';
import './styles.css';

function SubmissionCard({ submission }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedGrade, setEditedGrade] = useState(submission.grade);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedGrade(submission.grade);
  };

  const handleGradeChange = (event) => {
    setEditedGrade(event.target.value);
  };

  const handleSaveGrade = () => {
    // setSubmission({ ...submission, grade: editedGrade });
    setIsEditing(false);
  };

  return (
    <div className={`submission-card ${isEditing ? 'editing' : ''}`}>
      <div className="submission-details">
        <p>Student ID: {submission.student_id}</p>
        {isEditing ? (
          <input
            className="input-grade"
            type="number"
            value={editedGrade}
            onChange={handleGradeChange}
          />
        ) : (
          <p>Grade: {submission.grade}</p>
        )}
      </div>
      <div className="buttons">
        {isEditing ? (
          <>
            <button className="save-grade-button" onClick={handleSaveGrade}>
              Save
            </button>
            <button className="cancel-edit-button" onClick={handleEditToggle}>
              Cancel
            </button>
          </>
        ) : (
          <button className="edit-grade-button" onClick={handleEditToggle}>
            Edit Grade
          </button>
        )}
      </div>
    </div>
  );
}

export default SubmissionCard;
