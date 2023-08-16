import React, { useState, useEffect } from 'react';
import './styles.css';
import Notification from '../../Common/Notification';
import Submissions from '../Submissions';

function Assignments({assignments, assignmentId,setAssignmentId}) {

  return (<>
    { !assignmentId && <div className='assignments-cont'>
      {assignments.map((assignment) => (
        <Notification key={assignment.id} active={true} id={assignment.id} title={assignment.title} due={assignment.due_date} type='assignment' setAssignmentId={setAssignmentId}/>
      ))}
    </div>}
    {assignmentId && <Submissions assignmentId={assignmentId} setAssignmentId={setAssignmentId} />}
    
  </>)
}

export default Assignments;