import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../../Components/Common/CourseCard';
import Course from '../../Components/TeacherComponents/Course';
import './styles.css';

function Teacher() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  
  const [courses, setCourses] = useState([]);
  const [course_id, setCourseId] = useState(null);
  
  const getTeacherCourses = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/Teacher/courses', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setCourses(data.courses);
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };

  useEffect(() => {
    getTeacherCourses();
  }, []); 

  return (
    <>
      {!course_id && (
        <div className='courses-container'>
          {courses.map(course => (
            <CourseCard key={course.id} course={course} setCourseId={setCourseId} />
          ))}
        </div>
      )}
      {course_id && <Course course_id={course_id} setCourseId={setCourseId} />}
    </>
  );
}

export default Teacher;
