
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, UserRound } from "lucide-react";
import students from "../data/students";

function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (s) => s.id === Number(id)
  );

  if (!student) {
    return (
      <div className="section-card">
        <h2>Student Not Found</h2>
        <Link to="/students">Back to Students</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="page-heading">
        <div>
          <Link to="/students" className="back-link">
            <ArrowLeft size={18} /> Back to Students
          </Link>
          <h1>Student Details</h1>
          <p>Complete student profile information.</p>
        </div>
      </div>

      <div className="profile-card">
        <div className="student-profile">
          <div className="student-avatar">
            <UserRound size={45} />
          </div>

          <div>
            <h2>{student.name}</h2>
            <p>{student.registerNo}</p>
            <span className={`status ${student.status.toLowerCase()}`}>
              {student.status}
            </span>
          </div>
        </div>

        <h3>Personal Information</h3>

        <div className="details-grid">
          <div>
            <label>Full Name</label>
            <p>{student.name}</p>
          </div>

          <div>
            <label>Register Number</label>
            <p>{student.registerNo}</p>
          </div>

          <div>
            <label>Email Address</label>
            <p>{student.email}</p>
          </div>

          <div>
            <label>Phone Number</label>
            <p>{student.phone}</p>
          </div>

          <div>
            <label>Gender</label>
            <p>{student.gender}</p>
          </div>

          <div>
            <label>Address</label>
            <p>{student.address}</p>
          </div>

          <div>
            <label>Department</label>
            <p>{student.department}</p>
          </div>

          <div>
            <label>Academic Year</label>
            <p>{student.year}</p>
          </div>

          <div>
            <label>Academic Marks</label>
            <p>{student.marks}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
    