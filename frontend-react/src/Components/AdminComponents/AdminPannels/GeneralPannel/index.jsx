import "./style.css"
import Header from "../../Header"
import PannelData from "../../StudentPannelData"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

 const GeneralPannel = ({visibility}) => {
  return (
    <div className='flex column  width-65 margin-20 circular-20 padding-10 border-pannel pannel secondary-bg pannel-data' style={{ display: visibility }}>
  
    </div>
  )
  }
 export default GeneralPannel
