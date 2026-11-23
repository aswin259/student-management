
import { Users, GraduationCap, UserCheck, BookOpen } from "lucide-react";
import students from "../data/students";
import { Link } from "react-router-dom";

function Home() {
  const activeStudents = students.filter(
    (s) => s.status === "Active"
  ).length;

  const stats = [
    {
      title: "Total Students",
      value: students.length,
      icon: Users,
      color: "blue"
    },
    {
      title: "Active Students",
      value: activeStudents,
      icon: UserCheck,
      color: "green"
    },
    {
      title: "Departments",
      value: 4,
      icon: GraduationCap,
      color: "purple"
    },
    {
      title: "Academic Records",
      value: students.length,
      icon: BookOpen,
      color: "orange"
    }
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to your Student Management System.</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={index}>
              <div className={`stat-icon ${item.color}`}>
                <Icon size={25} />
              </div>

              <div>
                <p>{item.title}</p>
                <h2>{item.value}</h2>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-card">
        <div className="section-header">
          <h2>Recent Students</h2>
          <Link to="/students">View All</Link>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Register Number</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.slice(0, 5).map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.registerNo}</td>
                  <td>{student.department}</td>
                  <td>
                    <span className={`status ${student.status.toLowerCase()}`}>
                      {student.status}
                    </span>
                  </td>
                  <td>
                    <Link to={`/students/${student.id}`}>
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
