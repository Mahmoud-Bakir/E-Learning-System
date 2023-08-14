import React, { useState, useEffect } from 'react';
import './styles.css';
import MyResponsivePie from '../../Common/PieChart';
import Notification from '../../Common/Notification';
import Meeting from '../MeetingTab4';


function Class() {

  const data =[ 
    {
      "id": "Attendence",
      "label": "Attendence",
      "value": 470,
      "color": "hsl(107, 70%, 50%)"
    },
    {
      "id": "Grade",
      "label": "Grade",
      "value": 296,
      "color": "hsl(168, 70%, 50%)"
    },
  ]

  return (<>

    <div className='class-content'>
      <div className='left-content'>
        
        <div className='MyResponsivePie'>
          <MyResponsivePie  data={data}/>
        </div>

      <Meeting url={'akskaks'} title={'Class Link'}/>
      <Meeting url={'akskaks'} title={'Calendly Link'}/>
        
      </div>
 
      <div className='right-content'>
        <Notification title="Math: Uploaded New Material" type="Matrial" />
        <Notification title="Math" due="14-May" type="assignment" />
        <Notification title="Math" type="Matrial" />
      </div>

    </div>
    
    
    
  </>)
}

export default Class