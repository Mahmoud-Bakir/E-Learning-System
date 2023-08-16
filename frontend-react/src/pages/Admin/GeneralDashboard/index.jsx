import React, { useState } from 'react'
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import AdminNav from '../../../Components/AdminComponents/AdminNav'
import SideMenu from '../../../Components/AdminComponents/SideMenu'
import AdminPannel from '../../../Components/AdminComponents/AdminPannels/PeopleStudentPannel'
import GeneralPannel from '../../../Components/AdminComponents/AdminPannels/GeneralPannel'
import PeopleStudentPannel from '../../../Components/AdminComponents/AdminPannels/PeopleStudentPannel'
import PeopleTeacherPannel from '../../../Components/AdminComponents/AdminPannels/PeopleTeacherPannel'
import PeopleparentPannel from '../../../Components/AdminComponents/AdminPannels/PeopleParentPannel'
import Course from '../../Parent/Course'
 const GeneralDashboard = () => {
  const token = localStorage.getItem("token")
  const [people,setPeople] = useState(false)
  const [courses,setCourses] = useState(false)
  const [students,setStudents] = useState(false)
  const [teachers,setTeachers] = useState(false)
  const [parents,setParents] = useState(false)
  const [visibility,setVisibility] = useState("")
  
  const handlePeople = () => {
    setPeople(true)
    setCourses(false)
    setVisibility("flex")
 }
 const handleCourses = () => {
  setCourses(true)
  setPeople(false)
  setVisibility("none")
}
const handleStudents = () => {
  setStudents(true)
  setTeachers(false)
  setParents(false)
}
const handleTeachers = () => {
  setStudents(false)
  setTeachers(true)
  setParents(false)
}
const handleParents = () => {
  setStudents(false)
  setTeachers(false)
  setParents(true)
}
const navigator=useNavigate()
const addUser = () =>{
  navigator('/add_user');
}
const addCourse = () =>{
  navigator('/add_class');
}
const home = () =>{
  navigator('/');
}
const handleLogout = async()=>{
  const response = await fetch('http://127.0.0.1:8000/api/logout', {
    method: 'POST',
    headers: {
      Authorization: "Bearer " + token,
    },
  })
  console.log(response)
  home()
}
 console.log(courses)
 console.log(people)


  if(people&&students){
    return (
      <>
      <AdminNav handlePeople={handlePeople} handleCourses={handleCourses} t1="Courses" t2="People" handleLogout={handleLogout}/>
      <div className='flex fullwidth gap-100  '>
        <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} display={visibility} handleAddUser={addUser} handleAddCourse={addCourse}/>
        <PeopleStudentPannel/> 
        <GeneralPannel visibility={"none"}/>
      </div>
      </>
    ) 
   }
   if(people&&parents){
    return (
      <>
      <AdminNav handlePeople={handlePeople} handleCourses={handleCourses} t1="Courses" t2="People" handleLogout={handleLogout} />
      <div className='flex fullwidth gap-100  '>
        <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} display={visibility} handleAdd={addUser} handleAddCourse={addCourse}/>
        <PeopleparentPannel/>
        <GeneralPannel visibility={"none"}/>
      </div>
      </>
    ) 
   }
      if(people&&parents){
    return (
      <>
      <AdminNav handlePeople={handlePeople} handleCourses={handleCourses} t1="Courses" t2="People" handleLogout={handleLogout} />
      <div className='flex fullwidth gap-100  '>
        <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} display={visibility} handleAdd={addUser} handleAddCourse={addCourse}/>
        <PeopleparentPannel/>
        <GeneralPannel visibility={"none"}/>
      </div>
      </>
    ) 
   }
   if(people&&teachers){
    return (
      <>
      <AdminNav handlePeople={handlePeople} handleCourses={handleCourses} t1="Courses" t2="People" handleLogout={handleLogout} />
      <div className='flex fullwidth gap-100  '>
        <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} display={visibility} handleAdd={addUser} handleAddCourse={addCourse}/>
        <PeopleTeacherPannel/>
        <GeneralPannel visibility={"none"}/>
      </div>
      </>
    ) 
   }
    return(
    <>
      <AdminNav handlePeople={handlePeople} handleCourses={handleCourses} t1="Courses" t2="People" handleLogout={handleLogout} />
     <div className='flex fullwidth gap-100  '>
       <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} handleAdd={addUser} display={visibility} handleAddCourse={addCourse}/>
       <GeneralPannel />
      </div>
   
    </>
   )} 
   
 export default GeneralDashboard
