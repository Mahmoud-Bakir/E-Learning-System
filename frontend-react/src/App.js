import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/App.css";
import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/fonts.css";


import Authentication from "./pages/Authentication";

import StudentDashboard from './pages/Admin/StudentDashboard';
import Teacher from "./pages/Teacher";
import Parent from "./pages/Parent/Home";
import Course from './pages/Parent/Course'
import Student from "./pages/Student/Landing";
import ViewClass from './pages/Student/ViewClass'
import ViewAssignments from './pages/Student/ViewAssignments'
import './styles/utilities.css' 
import './styles/App.css' 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/Admin" element={<StudentDashboard />} />
          <Route path="/Teacher" element={<Teacher/>} />
          <Route path="/Parent" element={<Parent/>} />
          <Route path="/course" element={<Course/>} />
          <Route path="/Student" element={<Student />} />
          <Route path="/ViewClass" element={<ViewClass />} />
          <Route path="/ViewAssignments" element={<ViewAssignments />} />
          ViewAssignments
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
