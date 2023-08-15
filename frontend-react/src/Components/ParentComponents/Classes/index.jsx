import React from 'react'
import './style.css'
const ClassCard = ({classs})=> {
  return (

    <div className="flex column placeCard">
    <div className="rounded imagePlace">
      <img className="imagePlace" src="https://picsum.photos/200" alt="Place" />
    </div>
    <div className="placeDetails">
      <p className="strong">
        {classs.course_name}, {classs.teacher.FullName}
      </p>
      <p className="secondary">{classs.description}</p>
    </div>
    <button>View Class</button>
    </div>

  )
}

export default ClassCard