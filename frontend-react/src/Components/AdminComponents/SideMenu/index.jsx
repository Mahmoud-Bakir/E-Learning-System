import "../SideMenu/style.css"

export const SideMenu = () => {
  return (

    <div className=' flex column center nav-bg padding-35 width-15 self-center margin-20 circular-40 side-menu gap-50 white-text nav-text '>
         <span className='padding-20 pointer nav-tab'>Teachers</span>
         <span className='padding-20 pointer nav-tab'>Students</span>
         <span className='padding-20 pointer nav-tab'>Parents</span>
         <button className="padding-15 white-bg circular-20 button-text">Add User</button>
      </div>
  )
} 
export default SideMenu
