import React, { useState, useEffect } from 'react';
import './styles.css';
import Notification from '../../Common/Notification';

function Assignments({assignments}) {
  const [submissionId , setSubmissionId] = useState (null);
  return (<>
    { !submissionId && <div className='assignments-cont'>
      {assignments.map((assignment) => (
        <Notification key={assignment.id} active={true} id={assignment.id} title={assignment.title} due={assignment.due_date} type='assignment' setSubmissionId={setSubmissionId}/>
      ))}
    </div>}
    {submissionId && <h1>submissions</h1>}
  </>)
}

export default Assignments;