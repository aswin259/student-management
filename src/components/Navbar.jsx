
import { Search, Bell, GraduationCap, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <GraduationCap size={30} />
        <span>EduManage</span>
      </div>

      <div className="nav-search">
        <Search size={19} />
        <input
          type="text"
          placeholder="Search students..."
        />
      </div>

      <div className="nav-actions">
        <Bell size={22} />
        <div className="profile">
          <UserCircle size={28} />
          <span>Admin</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
