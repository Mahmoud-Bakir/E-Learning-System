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
    const token = localStorage.getItem('token');
    const submissionId = submission.id;

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        submission_id: submissionId,
        grade: editedGrade,
      }),
    };

    fetch('http://127.0.0.1:8000/api/Teacher/update_submission_grade', requestOptions)
      .then(response => {
        if (response.ok) {
          submission.grade = editedGrade;
          setIsEditing(false);
        } else {
          console.error('Error updating grade');
        }
      })
      .catch(error => {
        console.error('Error updating grade:', error);
      });
  };

  const handleOpenFile = () => {
    window.open(submission.FilePath, '_blank');
  }

  return (
    <div className={`submission-card ${isEditing ? 'editing' : ''}`}>
      <div className="submission-details">
        <p>Student Name: {submission.student.FullName}</p>
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
        ) : (<>
          <button className="edit-grade-button" onClick={handleEditToggle}>
            Edit Grade
          </button>
          <button className="edit-grade-button" onClick={handleOpenFile}>
            Open File
          </button>
        </>)}
      </div>
    </div>
  );
}

export default SubmissionCard;
