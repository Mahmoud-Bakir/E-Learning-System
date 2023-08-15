import React, { useState } from 'react';
import './styles.css';

function CreateAnnouncement ({course_id}) {
  const [isCreatingAssignment, setIsCreatingAssignment] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [totalGrade, setTotalGrade] = useState('');
  const [fileURL, setFileURL] = useState('');
  const token = localStorage.getItem('token');

  const resetFormFields = () => {
    setTitle('');
    setDescription('');
    setDate('');
    setTotalGrade('');
    setFileURL('');
  };

  const handleCreate = async () => {

    const route = isCreatingAssignment
      ? 'http://127.0.0.1:8000/api/Teacher/create_assignment'
      : 'http://127.0.0.1:8000/api/Teacher/create_material';

    const data = isCreatingAssignment
      ? {
          title: title,
          description: description,
          date: date,
          total_grade: totalGrade,
          id: course_id,
        }
      : {
          title: title,
          description: description,
          file_URL: fileURL,
          id: course_id,
        };

    const response = await fetch(route, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      resetFormFields();
    } else {
      console.error('Error creating', isCreatingAssignment ? 'assignment' : 'material');
    }
  };

  return (
    <div className="assignments-container">
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${isCreatingAssignment ? 'active' : ''}`}
          onClick={() => setIsCreatingAssignment(true)}
        >Create Assignment </button>
        <button
          className={`toggle-button ${!isCreatingAssignment ? 'active' : ''}`}
          onClick={() => setIsCreatingAssignment(false)}
        > Create Material </button>
      </div>
      <form className="assignment-form">
        {isCreatingAssignment ? (
          <>
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
          </>
        ) : (
          <>
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
              type="text"
              placeholder="File URL"
              value={fileURL}
              onChange={(e) => setFileURL(e.target.value)}
            />
          </>
        )}
        <button type="button" onClick={handleCreate}>
          Create {isCreatingAssignment ? 'Assignment' : 'Material'}
        </button>
      </form>
    </div>
  );
}

export default CreateAnnouncement;

