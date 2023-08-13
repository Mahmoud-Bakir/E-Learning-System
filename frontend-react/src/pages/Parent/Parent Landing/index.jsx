import React from 'react'
import DisplayList from '../../../Components/DisplayList/index'
import DataCard from '../../../Components/DataCard'

function Parent() {
  return (
    <div className='flex'>
      <DisplayList/>
      <DataCard/>
    </div>
  )
}

export default Parent