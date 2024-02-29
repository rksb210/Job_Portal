// import "./App.css";
// import Add_Jobs from "./components/admin_pannel/Add_Jobs";
import Add_Jobs from "./components/admin_pannel/Add_Jobs";
import DisplayAllJobs from "./components/admin_pannel/DisplayAllJobs";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import FileUpload from "./components/admin_pannel/FileUpload";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
  return (
<>
      <Router>
        <Routes>
          <Route element={<Add_Jobs />} path="/addjobs" />
          <Route element={<DisplayAllJobs />} path="/displayalljobs" />
          <Route element={<FileUpload />} path="/file" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </Router>
    

</>   
  );
}

export default App;
