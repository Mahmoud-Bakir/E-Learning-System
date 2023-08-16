import React, { useState } from 'react';
import "./styles.css"

function StudentCard({ studentInfo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAttendance, setEditedAttendance] = useState(studentInfo.attendance);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedAttendance(studentInfo.attendance);
  };

  const handleAttendanceChange = (event) => {
    setEditedAttendance(event.target.value);
  };

  const handleSaveAttendance = () => {
    setIsEditing(false);
  };

  return (
    <div className={`student-card ${isEditing ? 'editing' : ''}`}>
      <h3 className="student-name">{studentInfo.student.FullName}</h3>
      <p className="student-email">Email: {studentInfo.student.email}</p>
      {isEditing ? (
        <div className="attendance-edit">
          <input
            className="attendance-input"
            type="number"
            value={editedAttendance}
            onChange={handleAttendanceChange}
          />
          <button className="save-attendance-button" onClick={handleSaveAttendance}>
            Save
          </button>
        </div>
      ) : (
        <p className="student-attendance">Attendance: {studentInfo.attendance} days</p>
      )}
      <button className="edit-attendance-button" onClick={handleEditToggle}>
        {isEditing ? 'Cancel' : 'Edit Attendance'}
      </button>
      <div className="assignments">
        <h4 className="assignments-heading">Assignments:</h4>
        <ul className="assignments-list">
          {studentInfo.assignments.map((assignment) => (
            <li key={assignment.assignment_title} className="assignment-item">
              {assignment.assignment_title}: {assignment.grade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentCard;
