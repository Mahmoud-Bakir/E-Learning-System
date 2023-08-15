import React, { useState, useEffect } from 'react';
import './styles.css';
import MyResponsivePie from '../../Common/PieChart';
import Notification from '../../Common/Notification';
import Meeting from '../MeetingTab4';

function Class({ course_id }) {
  const [assignments, setAssignments] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [meetingLink, setMeetingLink] = useState('');
  const [calendlyLink, setCalendlyLink] = useState('');
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
        setStatistics(data.statistics);
        setMeetingLink(data.meeting_link);
        setCalendlyLink(data.calendly_link);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [course_id, token]);

  const data = [
    {
      id: 'Attendence',
      label: 'Attendence',
      value: statistics.attendence ? parseFloat(statistics.attendence.value) : 0,
      color: 'hsl(107, 70%, 50%)',
    },
    {
      id: 'Grade',
      label: 'Grade',
      value: statistics.grade ? parseFloat(statistics.grade.value) : 0,
      color: 'hsl(168, 70%, 50%)',
    },
  ];

  return (
    <div className='class-content'>
      <div className='left-content'>
        <div className='MyResponsivePie'>
          <MyResponsivePie data={data} />
        </div>
        <Meeting url={meetingLink} title={'Class Link'} />
        <Meeting url={calendlyLink} title={'Calendly Link'} courseId={course_id}/>
      </div>

      <div className='right-content'>
        {materials.map((material) => (
          <Notification key={material.id} title={material.title} type='Material' />
        ))}
        {assignments.map((assignment) => (
          <Notification key={assignment.id} title={assignment.title} due={assignment.due_date} type='assignment' />
        ))}
      </div>
    </div>
  );
}

export default Class;
