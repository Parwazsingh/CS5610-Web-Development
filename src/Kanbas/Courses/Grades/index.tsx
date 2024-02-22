import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import React from "react";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);

  // List of assignment IDs that should have an input field
  const editableAssignments = ["A101", "A104", "A201", "A206"];

  return (
    <div>
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Student Name</th>
              {as.map((assignment) => (
                <th key={assignment._id}>
                  {assignment.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((u) => u._id === enrollment.user);
              return (
                <tr key={enrollment._id}>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (g) => g.student === enrollment.user && g.assignment === assignment._id
                    );
                    return (
                      <td key={assignment._id} style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                        {editableAssignments.includes(assignment._id) ? (
                          <input
                            type="number"
                            defaultValue={grade?.grade || ""}
                            className="form-control"
                            style={{ width: "60px", margin: "0 auto", display: 'block' }}
                            onChange={(e) => {
                              // Implement logic to update the grade here
                            }}
                          />
                        ) : (
                          <span>{grade?.grade || "N/A"}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;

