import React from 'react'
import './styles.css'

function ClassCard({course, setCourseId}) {

  return (
    <div className="course-card" onClick={() => setCourseId(course.id)}>
    {/* <img className='course-image' src={} alt={'Course Image'} /> */}
    <h3>{course.course_name}</h3>
    <span>Description: {course.description}</span>
    <span>Category: {course.category}</span> 
    <span>Enrollment: {course.enrollment_count}</span>

  
  </div>
  )
}

export default ClassCard