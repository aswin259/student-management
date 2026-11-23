
import { GraduationCap, Users, ShieldCheck } from "lucide-react";

function About() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>About Us</h1>
          <p>Learn about our student management platform.</p>
        </div>
      </div>

      <div className="section-card about-card">
        <div className="about-icon">
          <GraduationCap size={55} />
        </div>

        <h2>EduManage Student Management System</h2>

        <p>
          EduManage is a modern student management platform
          designed to simplify the management of student
          information in educational institutions.
        </p>

        <p>
          This platform provides a centralized dashboard
          to view student profiles, academic information,
          department details and student records.
        </p>

        <div className="about-features">
          <div>
            <Users size={28} />
            <h3>Student Management</h3>
            <p>Organize and manage student records.</p>
          </div>

          <div>
            <ShieldCheck size={28} />
            <h3>Easy Access</h3>
            <p>View student information in one place.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
