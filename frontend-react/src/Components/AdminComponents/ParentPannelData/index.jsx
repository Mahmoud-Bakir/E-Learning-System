import "./style.css"
import  ParentRecord  from "../ParentRecord"

export const ParentPannelData = ({records}) => {
  return (
    <>{
      records.map((record) => (
      <ParentRecord
        id={record.id}
        first={record.first_name}
        last={record.last_name}
        email={record.email}
        child={record.id}
        key={record.id}
        />
     
    ))} 
    </> 
  )
} 
export default ParentPannelData
