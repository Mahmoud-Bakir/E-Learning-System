import React from 'react'
import './style.css'
const ClassCard = ({classs})=> {
  return (

    <div className="flex column placeCard">
    <div className="rounded imagePlace">
      <img src="https://picsum.photos/200" alt="Class" />
    </div>
    <div className="placeDetails">
      <p className="strong">
        {classs.status}
      </p>
      <p className="secondary">{classs.data}</p>
    </div>
    </div>

  )
}

export default ClassCard