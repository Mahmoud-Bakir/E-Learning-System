import React, { useEffect, useState } from 'react';
import "./styles.css"

function StudentCard({ studentInfo ,course_id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAttendance, setEditedAttendance] = useState(studentInfo.attendance);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedAttendance(studentInfo.attendance);
    console.log(studentInfo)
  };

  const handleSaveAttendance = () => {

      const token = localStorage.getItem('token');
    
      fetch('http://127.0.0.1:8000/api/Teacher/attendance', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          student_id: studentInfo.student.id,
          course_id: course_id,
          attendance: editedAttendance,
        }),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Attendance updated successfully');
            setIsEditing(false);
          } else {
            console.error('Error updating attendance');
          }
        })
        .catch((error) => {
          console.error('Error updating attendance:', error);
        });

    
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
            onChange={(e)=>setEditedAttendance(e.target.value)}
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
