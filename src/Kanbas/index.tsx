import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import '../Kanbas/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Kanbas() {
    return (
      <div className="d-flex">
        <div className="d-none d-md-block position-fixed bottom-0">
        <KanbasNavigation/>
        </div>
        <div style={{ flexGrow: 1 }} className="wd-ml-md-5">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
        </div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </div>
  );}
  export default Kanbas;