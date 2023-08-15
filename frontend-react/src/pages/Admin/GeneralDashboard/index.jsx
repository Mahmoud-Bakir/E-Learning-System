import React, { useState } from 'react'
import AdminNav from '../../../Components/AdminComponents/AdminNav'
import SideMenu from '../../../Components/AdminComponents/SideMenu'
import AdminPannel from '../../../Components/AdminComponents/AdminPannels/PeopleStudentPannel'
import GeneralPannel from '../../../Components/AdminComponents/AdminPannels/GeneralPannel'
import PeopleStudentPannel from '../../../Components/AdminComponents/AdminPannels/PeopleStudentPannel'
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

 console.log(courses)
 console.log(people)

 if(people&&students){
  return (
    <>
    <AdminNav handlePeople={handlePeople} handleCourses={handleCourses}/>
    <div className='flex fullwidth gap-100  '>
      <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} display={visibility}/>
      <PeopleStudentPannel/>
      <GeneralPannel visibility={"none"}/>
    </div>
    </>
  ) 
 }
 if(people&&teachers){
  return (
    <>
    <AdminNav handlePeople={handlePeople} handleCourses={handleCourses}/>
    <div className='flex fullwidth gap-100  '>
      <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} display={visibility}/>
      <PeopleStudentPannel/>
      <GeneralPannel visibility={"none"}/>
    </div>
    </>
  ) 
 }
  return(
  <>
    <AdminNav handlePeople={handlePeople} handleCourses={handleCourses}/>
   <div className='flex fullwidth gap-100  '>
     <SideMenu handleStudents={handleStudents} handleTeachers={handleTeachers} handleParents={handleParents} display={visibility}/>
     <GeneralPannel />
    </div>
 
  </>
 )} 
 

 export default GeneralDashboard
