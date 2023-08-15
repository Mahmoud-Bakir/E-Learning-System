import React from 'react'

export const TeacherRecord = ({id,first,last,email}) => {
    const [courses,setRecords] = useState([])
  return (
    <tr>
      <td>{id}</td>
      <td>{first}</td>
      <td>{last}</td>
      <td>{email}</td>
      <td>
        <select name="" id="">
            
        </select>
      </td>
      <td>...</td>

    </tr>
  )
} 
export default TeacherRecord;
