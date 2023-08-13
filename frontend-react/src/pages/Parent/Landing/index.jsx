import React, {useState} from 'react'
import './styles.css'
import DisplayList from '../../../Components/ParentComponents/DisplayList/index'
import DataCard from '../../../Components/ParentComponents/DataCard'
import TitleHeader from '../../../Components/ParentComponents/TitleHeader'
import Tabs from '../../../Components/ParentComponents/Tabs'

function Parent() {

const [filter, setFilter] = useState("all");
  return (
    <div className='flex column center parent-container'>
      <Tabs onTabChanged={(value) => setFilter(value)}/>
      <div className='flex'>
        <DisplayList/>
        <div>
          <TitleHeader/>
          <DataCard/>
        </div>  
      </div>
    </div>
  )
}

export default Parent