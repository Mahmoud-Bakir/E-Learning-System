import logo from '../../../../assets/logo.png'
import logout from '../../../../assets/logout.svg'
import "./style.css"
import { useNavigate } from "react-router-dom";
import { localStorageAction } from '../../../../core/config/localstorage'

const NavBar = () => { 
  const navigation = useNavigate();
  
  const firstName = localStorageAction("first_name");
  const lastName = localStorageAction("last_name");

  const welcomeMessage = firstName && lastName ? `Welcome ${firstName} ${lastName}` : "Welcome Parent";

  return (
    
    <>
    <div className="flex fullwidth">
      <div className=" flex fullwidth padding-20 circular-20 nav-bg margin-20 nav-text spaceBetween ">
       <div className='flex width-20 ' > 
        <img src={logo} alt="" className='logo' />
       </div>
       <div className='flex width-20 center gap-100'>
         <span className='padding-20 pointer nav-tab'>{welcomeMessage}</span>
        </div>
        <div className='flex width-20 center gap-30 icons-container'>
         <span 
         className='padding-20 pointer nav-tab' 
         onClick={() => {
          navigation("/Parent")
         }}>
         Home
         </span>
        <img src={logout} alt="" className='icon' onClick={() => {
              localStorage.removeItem("access_token");
              navigation("/");}}/>
        </div>

      </div>
    </div>
    
    </>
  )
}
 export default NavBar
