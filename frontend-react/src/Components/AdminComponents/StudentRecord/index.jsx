import React from 'react'

export const StudentRecord = ({id,first,last,email}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{first}</td>
      <td>{last}</td>
      <td>{email}</td>
      <td>Analytics</td>
      <td>...</td>

    </tr>
  )
} 
export default StudentRecord;
