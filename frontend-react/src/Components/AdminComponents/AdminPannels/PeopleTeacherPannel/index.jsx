import Header from "../../Header"
import PannelData from "../../StudentPannelData"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Teacher from "../../../../pages/Teacher"
import TeacherPannelData from "../../../TeacherPannelData"

 const PeopleTeacherPannel = () => {
  const token = localStorage.getItem('token');
  const [records,setRecords] = useState([])

  useEffect(() => {
    async function getTeachers() {
    const response = await axios.get('http://127.0.0.1:8000/api/Admin/get_teachers', {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const teachers=response.data.teachers
    console.log(teachers)
    const recs = teachers.map(teacher => ({
      id: teacher.id,
      userType: teacher.user_type,
      email: teacher.email,
      first_name: teacher.first_name,
      last_name: teacher.last_name,
      
    }));
    setRecords(recs)
    console.log(recs)
  }getTeachers()
},[])
 
     
  
  return (
    <div className='flex column  width-65 margin-20 circular-20 padding-10 border-pannel pannel secondary-bg pannel-data'>
      <table>
      <Header t1={"ID"} t2={"First Name"} t3={"Last Name"} t4={"email"} t5={"courses"} t6={"Actions"}/>
      <TeacherPannelData records={records} />
      </table>  
    </div>
  )
  }
 export default PeopleTeacherPannel
