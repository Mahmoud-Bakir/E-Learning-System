import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../../Components/Common/CourseCard';
import Course from '../../Components/TeacherComponents/Course';
import NavBar from '../../Components/TeacherComponents/NavBar'
import './styles.css';

function Teacher() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  
  const [courses, setCourses] = useState([]);
  const [course_id, setCourseId] = useState(null);
  
  const getTeacherCourses = () => {
    fetch('http://127.0.0.1:8000/api/Teacher/courses', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data.courses);
      })
      .catch((error) => {
        console.log(error);
        navigate('/');
      });
  };
  
  useEffect(() => {
    getTeacherCourses();
  }, []);
  

  return (
    <>
      <NavBar/>
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
