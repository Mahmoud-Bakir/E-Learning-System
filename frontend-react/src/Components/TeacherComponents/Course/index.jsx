import React, { useState } from 'react';
import TitleHeader from '../TitleHeader';
import Students from '../Students';
import Class from '../Class';
import Announcement from '../Announcement';
import Assignments from '../Assignments';

function Course({ course_id, setCourseId }) {
  const [classtab, setClasstab] = useState('Class');

  return (
    <>
      <TitleHeader setCourseId={setCourseId} setClasstab={setClasstab} />
      {classtab === 'Class' && <Class />}
      {classtab === 'Announcement' && <Announcement />}
      {classtab === 'Students' && <Students />}
      {classtab === 'Assignment' && <Assignments />}
    </>
  );
}

export default Course;
