import logo from '../../../assets/logo.png'
import logout from '../../../assets/logout.svg'
import message from '../../../assets/message.svg'
import settings from '../../../assets/settings.svg'
import "../AdminNav/style.css"



const AdminNav = ({handleCourses,handlePeople,t1,t2,handleLogout}) => {  
  return (
    
    <>
    <div className="flex fullwidth">
      <div className=" flex fullwidth padding-20 circular-20 nav-bg margin-20 nav-text spaceBetween ">
       <div className='flex width-20 ' > 
        <img src={logo} alt="" className='logo' />
       </div>
       <div className='flex width-20 center gap-100'>
         <span className='padding-20 pointer nav-tab' onClick={handleCourses}>{t1}</span>
         <span className='padding-20 pointer nav-tab' onClick={handlePeople} >{t2}</span>
        </div>
        <div className='flex width-20 center gap-30 icons-container'>
        <img src={message} alt="" className='icon' />
        <img src={settings} alt="" className='icon' />
        <img src={logout} alt="" className='icon' onClick={handleLogout}/>
        </div>

      </div>
    </div>
    
    </>
  )
}
 export default AdminNav
