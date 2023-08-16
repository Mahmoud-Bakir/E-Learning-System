import React, { useState, useEffect } from 'react';
import StudentCard from '../StudentCard'
import './styles.css';

function Students({course_id}) {
  const [courseData, setCourseData] = useState({});
  const [studentAnalytics, setStudentAnalytics] = useState([]);

  useEffect(() => {
    fetchStudentAnalytics();
  }, []);

  const fetchStudentAnalytics = () => {
    fetch('http://127.0.0.1:8000/api/Admin/course_students_analytics', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ course_id: course_id }),
    })
      .then((response) => {return response.json();})
      .then((data) => {
        setCourseData(data.course);
        setStudentAnalytics(data.student_analytics);
      })
      .catch((error) => {
        console.error('Error fetching student analytics:', error);
      });
  };

  return (<>
      <h2 className="course-title">Course: {courseData.course_name}</h2>
      <div className="students-container">
          {studentAnalytics.map((studentInfo) => (
            <StudentCard key={studentInfo.student.id} studentInfo={studentInfo} />
          ))}
      </div>
  </>);
}

export default Students;
