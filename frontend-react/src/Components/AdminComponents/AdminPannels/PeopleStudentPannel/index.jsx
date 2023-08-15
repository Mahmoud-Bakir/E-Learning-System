import "./style.css"
import Header from "../../Header"
import PannelData, { StudentPannelData } from "../../StudentPannelData"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

 const PeopleStudentPannel = () => {
  const token = localStorage.getItem('token');
  const [records,setRecords] = useState([])


  
  useEffect(() => {
    async function getStudents() {
    const response = await axios.get('http://127.0.0.1:8000/api/Admin/get_students', {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const students=response.data.students
    console.log(students)
    const recs = students.map(student => ({
      id: student.id,
      userType: student.user_type,
      email: student.email,
      first_name: student.first_name,
      last_name: student.last_name,
      
    }));
    setRecords(recs)
    console.log(recs)
  }
  getStudents()},[])
 
  




  return (
    <div className='flex column  width-65 margin-20 circular-20 padding-10 border-pannel pannel secondary-bg pannel-data'>
      <table>
      <Header t1={"ID"} t2={"First Name"} t3={"Last Name"} t4={"email"} t5={"Analytics"} t6={"Actions"}/>
      <StudentPannelData records={records} />
      </table>  
    </div>
  )
  }
 export default PeopleStudentPannel
