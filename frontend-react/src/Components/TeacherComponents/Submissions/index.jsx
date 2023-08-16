import React, { useState, useEffect } from 'react';
import './styles.css';

function Submissions({ assignmentId }) {
  const [submissions, setSubmissions] = useState([]);
  const token = localStorage.getItem('token');

  const getSubmissions = () => {
    fetch('http://127.0.0.1:8000/api/Teacher/submission', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ assignment_id: assignmentId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmissions(data.submission);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  };
  

  useEffect(() => {
    getSubmissions();
  }, [assignmentId]);

  return (
    <div>
      {submissions.map((submission) => (
        <div key={submission.id}>{submission.id}</div>
      ))}
    </div>
  );
}

export default Submissions;
