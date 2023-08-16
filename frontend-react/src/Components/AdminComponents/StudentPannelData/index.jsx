import  StudentRecord  from "../ParentRecord"
import StudentCourses from "../StudentCourses"

export const StudentPannelData = ({records}) => {
  
  return (
    <>{
      records.map((record) => (
      <StudentRecord
        id={record.id}
        first={record.first_name}
        last={record.last_name}
        email={record.email}
        courses={record.courses}
        key={record.id}
        />
     
    ))} 
    </> 
  )
} 
export default StudentPannelData
// courses={record.courses.map((te)=>{
//   <StudentCourses
//   name={te.course_name}
//   />
// })}