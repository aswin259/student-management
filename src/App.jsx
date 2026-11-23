
import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layout/DashboardLayout";
import Home from "./Pages/Home";
import Student from "./Pages/Student";
import StudentDetails from "./Pages/StudentDetails";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
