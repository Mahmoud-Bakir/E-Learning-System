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
  navigator('/add');
}

 console.log(courses)
 console.log(people)


  if(people&&students){
    return (
      <>
      <AdminNav handlePeople={handlePeople} handleCourses={handleCourses} t1="Courses" t2="People"/>
      <div className='flex fullwidth gap-100  '>
        <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} display={visibility} handleAdd={addUser}/>
        <PeopleStudentPannel/> 
        <GeneralPannel visibility={"none"}/>
      </div>
      </>
    ) 
   }
   if(people&&parents){
    return (
      <>
      <AdminNav handlePeople={handlePeople} handleCourses={handleCourses} t1="Courses" t2="People"/>
      <div className='flex fullwidth gap-100  '>
        <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} display={visibility} handleAdd={addUser}/>
        <PeopleparentPannel/>
        <GeneralPannel visibility={"none"}/>
      </div>
      </>
    ) 
   }
      if(people&&parents){
    return (
      <>
      <AdminNav handlePeople={handlePeople} handleCourses={handleCourses} t1="Courses" t2="People"/>
      <div className='flex fullwidth gap-100  '>
        <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} display={visibility} handleAdd={addUser}/>
        <PeopleparentPannel/>
        <GeneralPannel visibility={"none"}/>
      </div>
      </>
    ) 
   }
   if(people&&teachers){
    return (
      <>
      <AdminNav handlePeople={handlePeople} handleCourses={handleCourses} t1="Courses" t2="People"/>
      <div className='flex fullwidth gap-100  '>
        <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} display={visibility} handleAdd={addUser}/>
        <PeopleTeacherPannel/>
        <GeneralPannel visibility={"none"}/>
      </div>
      </>
    ) 
   }
    return(
    <>
      <AdminNav handlePeople={handlePeople} handleCourses={handleCourses} t1="Courses" t2="People"/>
     <div className='flex fullwidth gap-100  '>
       <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} handleAdd={addUser} display={visibility}/>
       <GeneralPannel />
      </div>
   
    </>
   )} 
   
 export default GeneralDashboard
