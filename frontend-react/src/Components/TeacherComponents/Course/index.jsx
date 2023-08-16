import React, { useState , useEffect } from 'react';
import TitleHeader from '../TitleHeader';
import Students from '../Students';
import Class from '../Class';
import Announcement from '../Announcement';
import Assignments from '../Assignments';

function Course({ course_id, setCourseId }) {
  const [classtab, setClasstab] = useState('Class');
  const [assignments, setAssignments] = useState([]);
  const [assignmentId , setAssignmentId] = useState (null);
  return (
    <>
      <TitleHeader setCourseId={setCourseId} setClasstab={setClasstab} setAssignmentId={setAssignmentId} />
      {classtab === 'Class' && <Class course_id={course_id} assignments={assignments} setAssignments={setAssignments} />}
      {classtab === 'Announcement' && <Announcement course_id={course_id} />}
      {classtab === 'Students' && <Students course_id={course_id} />}
      {classtab === 'Assignment' && <Assignments assignmentId={assignmentId} setAssignmentId={setAssignmentId} course_id={course_id} assignments={assignments} />}
    </>
  );
}

export default Course;
