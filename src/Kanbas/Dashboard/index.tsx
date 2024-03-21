import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; })
  {

  return (
    <div className="p-4">
      <h1>Dashboard</h1><hr/>

      <h2>Published Courses (8)</h2> <hr /><br/>
      <h5>Course</h5>
      <input value={course.name} className="form-control" 
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } /><br/>
      <input value={course.number} className="form-control" 
      onChange={(e) => setCourse({ ...course, number: e.target.value }) } /><br/>
      <input value={course.startDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/><br/>
      <input value={course.endDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } /><br/>
      <button onClick={addNewCourse}
      style={{
        backgroundColor: "#4CAF50", 
        color: "white",
        padding: "5px 15px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "6px 4px",
        cursor: "pointer",
        border: "none",
        borderRadius: "4px",
      }} >
        Add
      </button>
      <button onClick={updateCourse}
      
      style={{
        backgroundColor: "#007BFF", 
        color: "white",
        padding: "5px 15px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "6px 4px",
        cursor: "pointer",
        border: "none",
        borderRadius: "4px",
      }} >
        Update
      </button>

      
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course:any) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    
                    {course.name} 
                    <br/>
                  
              </Link>
            
                  <p className="card-text">{course.name}</p>
                  Available From {course.startDate} Until {course.endDate}
                  <br/>
                  <button onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
              style={{
                backgroundColor: "#4CAF50", // Green color
                color: "white",
                padding: "5px 15px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "6px 4px",
                cursor: "pointer",
                border: "none",
                borderRadius: "4px",
              }}
              >
              Edit
            </button>

                    <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      style={{
                        backgroundColor: "#f44336", // Red color
                        color: "white",
                        padding: "5px 15px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                        fontSize: "16px",
                        margin: "6px 4px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "4px",
                      }}
                      
                      
                      >
                      Delete
              </button>
              <br/>
                  <Link  style={{
        backgroundColor: "#007BFF", 
        color: "white",
        padding: "5px 15px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "6px 4px",
        cursor: "pointer",
        border: "none",
        borderRadius: "4px",
      }}  to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go
                    
                     </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;