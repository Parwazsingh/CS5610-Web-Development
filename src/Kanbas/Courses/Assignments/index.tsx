import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { FaEllipsis } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div className="wd-flex-row-container p-2">
                <div style={{ textAlign: 'left' }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for Assignment"
                        id="SearchForAssignments"
                    />
                </div>

                <div className="flex-fill" style={{ textAlign: 'right' }}>
                    <button
                        style={{ border: 'solid 0.5px', backgroundColor: 'lightgray' }}
                        type="button"
                        className="btn custom-btn-outline me-2"
                    >
                        <FaPlus style={{ color: 'gray' }} /> Group
                    </button>
                    <button
                        style={{
                            border: 'solid',
                            color: 'white',
                            backgroundColor: 'rgb(217, 21, 21)',
                        }}
                        type="button"
                        className="btn custom-btn-outline me-2"
                    >

                        <FaPlus /> Assignment
                    </button>
                    <div className="dropdown" style={{ float: 'right' }}>
                        <button
                            style={{ backgroundColor: 'lightgray', color: 'lightgray' }}
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FaEllipsisV className="ms-2" style={{ color: 'black' }} />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Edit</a></li>
                            <li><a className="dropdown-item" href="#">Delete</a></li>
                            <li><a className="dropdown-item" href="#">Hide</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />

            {/* {<!-- Add buttons and other fields here -->} */}
            <ul className="list-group wd-modules" style={{ width: "1025px" }}>
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                        <span
                        className="badge rounded-pill float-end"
                        style={{
                          color: "black",
                          border: "solid 1px",
                          borderColor: "gray",
                          textAlign: "center",
                          paddingRight: "10px",
                          paddingTop: "10px",
                          paddingLeft: "10px"
                        }}>40% of Total</span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link><p style={{fontSize: "12px"}} className="">{assignment.subtitle}</p>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;