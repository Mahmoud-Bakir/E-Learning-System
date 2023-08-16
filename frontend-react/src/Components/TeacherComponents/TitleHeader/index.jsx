import React from 'react';
import './styles.css';

const TitleHeader = ({ setCourseId, setClasstab,setAssignmentId }) => {
  return (
    <div className='title-header-container-teacher'>
      <h2 data-tab="Class" onClick={(e) => setClasstab(e.target.getAttribute('data-tab'))}>Class</h2>
      <h2 data-tab="Students" onClick={(e) => setClasstab(e.target.getAttribute('data-tab'))}>Students</h2>
      <h2 data-tab="Announcement" onClick={(e) => setClasstab(e.target.getAttribute('data-tab'))}>Announcement</h2>
      <h2 data-tab="Assignment"   onClick={(e) => {setClasstab(e.target.getAttribute('data-tab'));setAssignmentId(null);}}>Assignment</h2>
      <h2 onClick={() => setCourseId(null)}>Back</h2>
    </div>
  );
};

export default TitleHeader;
