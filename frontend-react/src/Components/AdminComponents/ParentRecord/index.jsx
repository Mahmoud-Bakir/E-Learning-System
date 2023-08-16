import React from 'react'

export const ParentRecord = ({id,first,last,email,child}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{first}</td>
      <td>{last}</td>
      <td>{email}</td>
      <td>{child}</td>
      <td>...</td>
    </tr>
  )
} 
export default ParentRecord;
