import React, { useState, useEffect } from 'react';
import './styles.css';
import CreateAnnouncement from '../CreateAnnouncement';
function Announcement({course_id}) {
  return (
    <CreateAnnouncement  course_id={course_id}/>
  )
}

export default Announcement