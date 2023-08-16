import React from 'react'

export const StudentRecord = ({id,first,last,email,courses}) => {
  console.log(courses)
  return (
    <tr>
      <td>{id}</td>
      <td>{first}</td>
      <td>{last}</td>
      <td>{email}</td>
      <td>
        <select>
        {courses.map(course => (
          <option >
            {course.course_name}
          </option>
        ))}
      </select>
      </td>
      <td>delete</td>
    </tr>
  )
} 
export default StudentRecord;
const recs = data.map(data => ({
  id: data.id,
  userType: data.user_type,
  email: data.email,
  first_name: data.first_name,
  last_name: data.last_name,
  courses:data.courses
}));