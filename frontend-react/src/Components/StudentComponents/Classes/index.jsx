import React from 'react'
import './style.css'
import Button from '../../Button/index'


const ClassCard = ({nav, btn, p1,p2,p3,p4, enabled,enroll})=> {
  return (
    <div className="course-card">
    <div className="rounded imagePlace">
      <img className="imagePlace" src="https://picsum.photos/200" alt="Place" />
    </div>
    <div className="placeDetails">
      <h3 className="strong">
        {p1}, {p2}
      </h3>
      <h4 className="secondary">{p4}</h4>
    </div>
    <Button text={btn} navig={nav} enroll={enroll} enabled={enabled} k={p3}/>
    </div>

  )
}

export default ClassCard