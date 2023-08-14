import React, { useState, useEffect } from 'react';
import './styles.css';
import MyResponsivePie from '../../Common/PieChart';

function Class() {


  const data =[ 
    {
      "id": "ruby",
      "label": "ruby",
      "value": 470,
      "color": "hsl(107, 70%, 50%)"
    },
    {
      "id": "haskell",
      "label": "haskell",
      "value": 296,
      "color": "hsl(168, 70%, 50%)"
    },
  ]

  return (<>

    <div className='class-content'>
      <div className='Left-content'>
        <div className='MyResponsivePie'>
          <MyResponsivePie  data={data}/>
        </div>
        <div className='MyResponsivePie'>
          <MyResponsivePie  data={data}/>
        </div>
      </div>
 
      <div className='right-content'>
        0
      </div>

    </div>
    
    
    
  </>)
}

export default Class