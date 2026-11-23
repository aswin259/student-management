
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Info,
  GraduationCap
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-heading">
        MAIN MENU
      </div>

      <NavLink to="/" end className="sidebar-link">
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/students" className="sidebar-link">
        <Users size={20} />
        <span>Students</span>
      </NavLink>

      <NavLink to="/about" className="sidebar-link">
        <Info size={20} />
        <span>About</span>
      </NavLink>

      <div className="sidebar-footer">
        <GraduationCap size={20} />
        <span>EduManage v1.0</span>
      </div>
    </aside>
  );
}

export default Sidebar;
