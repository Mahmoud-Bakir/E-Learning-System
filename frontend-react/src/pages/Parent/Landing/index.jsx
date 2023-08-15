import React, {useState} from 'react'
import './styles.css'
import DisplayList from '../../../Components/ParentComponents/DisplayList/index'
import DataCard from '../../../Components/ParentComponents/DataCard'
import TitleHeader from '../../../Components/ParentComponents/TitleHeader'


function Parent() {

  return (
    <div className='flex column center parent-container'>  
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