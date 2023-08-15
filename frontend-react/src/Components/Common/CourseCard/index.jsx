import React from 'react'
import './styles.css'

function ClassCard({course, setCourseId}) {

  return (
    <div className="course-card" onClick={() => setCourseId(course.id)}>
    {/* <img className='course-image' src={} alt={'Course Image'} /> */}
    <h3>{course.course_name}</h3>
    {/* <span>Category: {course.category_name}</span> */}
    {/* <span>Announcments: {course.announcments_number}</span>
    <span>Enrollment: {course.enrollment_number}</span> */}
    <span>Category: MATH</span>
    <span>Announcments: 21</span>
    <span>Enrollment: 6</span>
  
  </div>
  )
}

export default ClassCard