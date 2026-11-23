
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Eye } from "lucide-react";
import students from "../data/students";

function Student() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.registerNo} ${student.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Students</h1>
          <p>Manage and view all registered students.</p>
        </div>
      </div>

      <div className="section-card">
        <div className="student-toolbar">
          <h2>Student Directory</h2>

          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search by name, register no..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Register Number</th>
                <th>Department</th>
                <th>Year</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.registerNo}</td>
                  <td>{student.department}</td>
                  <td>{student.year}</td>
                  <td>
                    <span className={`status ${student.status.toLowerCase()}`}>
                      {student.status}
                    </span>
                  </td>
                  <td>
                    <Link
                      to={`/students/${student.id}`}
                      className="view-button"
                    >
                      <Eye size={17} /> View
                    </Link>
                  </td>
                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="7">No students found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Student;
