import React, { useState, useEffect } from 'react';
import './styles.css';
import Notification from '../../Common/Notification';

function Assignments({assignments}) {
  return (<>
    <div className='assignments-cont'>
      {assignments.map((assignment) => (
        <Notification key={assignment.id} title={assignment.title} due={assignment.due_date} type='assignment' />
      ))}
    </div>
  </>)
}

export default Assignments;