import React from 'react'
import './style.css'
const ClassCard = ({classes})=> {
  return (

    <div className="flex column placeCard">
    <div className="rounded imagePlace">
      <img src="https://picsum.photos/200" alt="Place" />
    </div>
    <div className="placeDetails">
      <p className="strong">
        {classes.classsName - classes.teacherName}
      </p>
      <p className="secondary">{classes.classDesc}</p>
    </div>
    </div>

  )
}

export default ClassCard