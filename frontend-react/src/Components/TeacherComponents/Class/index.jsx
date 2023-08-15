import React, { useState, useEffect } from 'react';
import './styles.css';
import MyResponsivePie from '../../Common/PieChart';
import Notification from '../../Common/Notification';
import Meeting from '../MeetingTab4';

function Class({course_id}) {
  const [assignments, setAssignments] = useState([]);
  const [materials, setMaterials] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/Teacher/course_elements', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: course_id }),
        });

        const data = await response.json();
        setAssignments(data.assignments);
        setMaterials(data.materials);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [course_id, token]);

  const data = [
    {
      "id": "Attendence",
      "label": "Attendence",
      "value": 470,
      "color": "hsl(107, 70%, 50%)"
    },
    {
      "id": "Grade",
      "label": "Grade",
      "value": 296,
      "color": "hsl(168, 70%, 50%)"
    },
  ];

  return (
    <div className='class-content'>
      <div className='left-content'>
        <div className='MyResponsivePie'>
          <MyResponsivePie data={data} />
        </div>
        <Meeting url={'akskaks'} title={'Class Link'} />
        <Meeting url={'akskaks'} title={'Calendly Link'} />
      </div>

      <div className='right-content'>
        {materials.map((material) => (
          <Notification key={material.id} title={material.title} type="Material" />
        ))}
        {assignments.map((assignment) => (
          <Notification key={assignment.id} title={assignment.title} due={assignment.due_date} type="assignment"/>
        ))}
        
      </div>
    </div>
  );
}

export default Class;
