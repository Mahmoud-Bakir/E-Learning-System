import "../SideMenu/style.css"

export const SideMenu = ({display,handleParents,handleStudents,handleTeachers}) => {
  return (
    <div className=' flex column center nav-bg padding-35 width-15 self-center circular-40 side-menu gap-50 white-text nav-text '>
         <span className='padding-20 pointer nav-tab' onClick={handleTeachers}>Teachers</span>
         <span className='padding-20 pointer nav-tab' onClick={handleStudents}>Students</span>
         <span className='padding-20 pointer nav-tab'onClick={handleParents} style={{ display: display }}>Parents</span>
         <button className="padding-15 white-bg circular-20 button-text pointer add">Add User</button>
      </div>
  )
} 
export default SideMenu
