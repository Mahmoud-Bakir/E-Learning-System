
import TeacherRecord from "../TeacherRecord"

export const TeacherPannelData = ({records}) => {
  return (
    <>{
      records.map((record) => (
      <TeacherRecord
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
export default TeacherPannelData
