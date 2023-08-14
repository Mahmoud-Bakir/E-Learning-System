import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/App.css";
import "./styles/utilities.css";
import "./styles/colors.css";

import Authentication from "./pages/Authentication";
import Admin from "./pages/Admin";
import Teacher from "./pages/Teacher";
import Parent from "./pages/Parent/Landing";
import Student from "./pages/Student";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Teacher" element={<Teacher/>} />
          <Route path="/Parent" element={<Parent/>} />
          <Route path="/Student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
