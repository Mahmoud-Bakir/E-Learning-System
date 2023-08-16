import "./style.css"
import Header from "../../Header"
import  StudentPannelData from "../../StudentPannelData"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

 const PeopleStudentPannel = () => {
  const token = localStorage.getItem('token');
  const [records,setRecords] = useState([])
  const [test,setCourses] = useState([])

  useEffect(() => {
    async function getStudents() {
    const response = await axios.get('http://127.0.0.1:8000/api/Admin/get_students', {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
 
    const data=response.data.students
    console.log(data.courses)
    const courses= []
    const recs = data.map(data => ({
      id: data.id,
      userType: data.user_type,
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      courses:data.courses.course_name
    }));
  
    
    setRecords(recs)
    console.log(recs)
    console.log(records)
  }
  getStudents()},[])
 
  




  return (
    <div className='flex column  width-65 margin-20 circular-20 padding-10 border-pannel pannel secondary-bg pannel-data'>
      <table>
      <Header t1={"ID"} t2={"First Name"} t3={"Last Name"} t4={"email"} t5={"courses"} t6={"Actions"}/>
      <StudentPannelData records={records} />
      </table>  
    </div>
  )
  }
 export default PeopleStudentPannel
