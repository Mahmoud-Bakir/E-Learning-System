import "../AdminPannel/style.css"
import Header from "../Header"
import PannelData from "../PannelData"

export const AdminPannel = () => {
  return (
    <div className='flex column  width-65 margin-20 circular-20 padding-10 border-pannel pannel secondary-bg pannel-data'>
      <table>
      <Header t1={"ID"} t2={"First Name"} t3={"Last Name"} t4={"email"} t5={"Analytics"} t6={"Actions"}/>
      <PannelData/>
      </table>  
    </div>
  )
}
 export default AdminPannel
