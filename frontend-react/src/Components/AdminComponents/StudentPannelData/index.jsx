import "./style.css"
import  StudentRecord  from "../StudentRecord"

export const StudentPannelData = ({records}) => {
  return (
    <>{
      records.map((record) => (
      <StudentRecord
        id={record.id}
        first={record.first_name}
        last={record.last_name}
        email={record.email}
        key={record.id}
        />
     
    ))} 
    </> 
  )
} 
export default StudentPannelData
