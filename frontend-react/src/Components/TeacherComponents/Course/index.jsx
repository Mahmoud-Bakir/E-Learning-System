import React, { useState, useEffect } from 'react';
import TitleHeader from '../TitleHeader'

function Course({course_id, setCourseId}) {

  const [classtab, setClasstab] = useState('Class');

  return (<>
    <TitleHeader setCourseId={setCourseId} setClasstab={setClasstab}/>
  </>

  )
}

export default Course