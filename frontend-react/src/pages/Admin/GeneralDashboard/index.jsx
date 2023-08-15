import React, { useState } from 'react'
import AdminNav from '../../../Components/AdminComponents/AdminNav'
import SideMenu from '../../../Components/AdminComponents/SideMenu'
import AdminPannel from '../../../Components/AdminComponents/AdminPannels/PeopleStudentPannel'
import GeneralPannel from '../../../Components/AdminComponents/AdminPannels/GeneralPannel'
 const GeneralDashboard = () => {
  const [people,setPeople] = useState(false)
  const [courses,setCourses] = useState(false)
  const handlePeople = () => {
    setPeople(true)
    setCourses(false)
 }
 const handleCourses = () => {
  setCourses(true)
  setPeople(false)
}
 console.log(courses)
 console.log(people)


  return (
    <>
    <AdminNav handlePeople={handlePeople} handleCourses={handleCourses}/>
    <div className='flex fullwidth gap-100  '>
      <SideMenu/>
      <GeneralPannel/>
     

    </div>
    </>
  )
}
 export default GeneralDashboard
