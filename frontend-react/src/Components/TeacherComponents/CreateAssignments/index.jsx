import React, { useState } from 'react';
import "./styles.css"

function CreateAssignments({course_id}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [totalGrade, setTotalGrade] = useState('');

  const handleCreateAssignment = async () => {
    const token = localStorage.getItem('token');

    const response = await fetch('http://127.0.0.1:8000/api/Teacher/create_assignment', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        description: description,
        date: date,
        total_grade: totalGrade,
        id: course_id,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Assignment created:', data.assignment);
    } else {
      console.error('Error creating assignment');
    }
  };

  return (
    <div className="assignments-container">
      <h2>Create Assignment</h2>
      <form className="assignment-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total Grade"
          value={totalGrade}
          onChange={(e) => setTotalGrade(e.target.value)}
        />
        <button type="button" onClick={handleCreateAssignment}>
          Create Assignment
        </button>
      </form>
    </div>
  );
}

export default CreateAssignments;
