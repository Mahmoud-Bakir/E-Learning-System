import React from 'react'

export const TeacherRecord = ({id,first,last,email}) => {
   
  return (
    <tr>
      <td>{id}</td>
      <td>{first}</td>
      <td>{last}</td>
      <td>{email}</td>
      <td>...</td>

    </tr>
  )
} 
export default TeacherRecord;
