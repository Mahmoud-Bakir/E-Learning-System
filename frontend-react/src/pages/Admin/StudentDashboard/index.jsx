import React from 'react'
import AdminNav from '../../../Components/AdminComponents/AdminNav'
import SideMenu from '../../../Components/AdminComponents/SideMenu'
import AdminPannel from '../../../Components/AdminComponents/AdminPannel'
 const StudentDashboard = () => {
  return (
    <>
    <AdminNav/>
    <div className='flex fullwidth gap-100  '>
      <SideMenu/>
      <AdminPannel/>
     

    </div>
    </>
  )
}
 export default StudentDashboard
