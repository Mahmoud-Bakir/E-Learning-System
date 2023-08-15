import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/App.css";
import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/fonts.css";


import Authentication from "./pages/Authentication";
import Teacher from "./pages/Teacher";
import Parent from "./pages/Parent/Home";
import Course from './pages/Parent/Course'
import Student from "./pages/Student";
import GeneralDashboard from "./pages/Admin/GeneralDashboard";
import AddUser from "./pages/AddUser";
import Landing from "./pages/Landing";
import './styles/utilities.css' 
import './styles/App.css' 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddUser />} />
          <Route path="/" element={<Authentication />} />
          <Route path="/Dashboard" element={<GeneralDashboard />} />
          <Route path="/Teacher" element={<Teacher/>} />
          <Route path="/Parent" element={<Parent/>} />
          <Route path="/course" element={<Course/>} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
