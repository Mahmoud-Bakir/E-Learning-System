import logo from '../../../assets/logo.png'
import logout from '../../../assets/logout.svg'
import { useNavigate } from 'react-router-dom';
import "./style.css"
import { localStorageAction } from '../../../core/config/localstorage'

const NavBar = () => { 
  const navigate = useNavigate();
  const firstName = localStorageAction("first_name");
  const lastName = localStorageAction("last_name");

  const welcomeMessage = firstName && lastName ? `Welcome Teacher ${firstName} ${lastName}` : "";

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
        <img src={logout} alt="" className='icon'/>
        </div>

      </div>
    </div>
    
    </>
  )
}
 export default NavBar
