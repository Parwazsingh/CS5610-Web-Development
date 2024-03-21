import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRegCheckCircle, FaPlus, FaGripVertical, FaCaretRight, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import { FaArrowRight, FaGrip } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
  } from "./reducer";
  import { KanbasState } from "../../store";
function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
    // const [moduleList, setModuleList] = useState<any[]>(db.modules);
     const modulesList = db.modules.filter((module) => module.course === courseId);
     const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    //     _id: "3456"
    //   });
    //   const addModule = (module: any) => {
    //     const newModule = { ...module,
    //       _id: new Date().getTime().toString() };
    //     const newModuleList = [newModule, ...moduleList];
    //     setModuleList(newModuleList);
    //   };
    //   const deleteModule = (moduleId: string) => {
    //     const newModuleList = moduleList.filter(
    //       (module) => module._id !== moduleId );
    //     setModuleList(newModuleList);
    //   };
    //   const updateModule = () => {
    //     const newModuleList = modulesList.map((m) => {
    //       if (m._id === module._id) {
    //         return module;
    //       } else {
    //         return m;
    //       }
    //     });
    //     setModuleList(newModuleList);
    // };
    
    
    return (
        <>
            <div className="d-flex justify-content-end">
                <button style={{ borderColor: "gray", backgroundColor: "lightgray" }} type="button" className="btn custom-btn-outline me-2">Collapse All</button>
                <button style={{ borderColor: "gray", backgroundColor: "lightgray" }} type="button" className="btn custom-btn-outline me-2">View Progress</button>
                {/* <select style={{ border: "solid" }} className="btn custom-btn-outline me-2">
                    <option value="VAL1">
                     <FaCheckCircle className="text-success" />Publish All
                    </option>
                    <option value="VAL2">
                    Publish None
                    </option>
                </select> */}
                <div className="dropdown" style={{ float: "right" }}>
                    <button
                        style={{ backgroundColor: "lightgray", color: "black", borderColor: "gray" }}
                        className="btn btn-secondary-1 dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <FaRegCheckCircle className="text-success" /> Publish All
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"></ul>
                </div>
                <button style={{ border: "solid", backgroundColor: "red", color: "white" }} type="button" className="btn custom-btn-module"><FaPlus className="ms-2" /> Module</button>
                <button style={{ borderColor: "gray", backgroundColor: "lightgray", color: "black" }} type="button" className="btn custom-btn-module"><FaEllipsisV className="ms-2" /></button>
            </div>
            <hr/>
            <button className="btn btn-primary me-1" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                    <button className="btn btn-secondary" onClick={() => dispatch(updateModule(module))}>Update</button>


                    <input 
                        placeholder="New Module"
                        className="form-control my-1"
                        value={module.name}
                        onChange={(e) =>  dispatch(setModule({ ...module, name: e.target.value }))}
                    />
        
        <textarea 
                        placeholder="New Description"
                        className="form-control my-2"
                        value={module.description}
                        onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))}
                    />
            {/* <!-- Add buttons here --> */}
            <ul style={{width: "99%"}} className="list-group wd-modules">
            <li className="list-group-item">
           
      </li>

                {moduleList.filter((module) => module.course === courseId).map((module) => (
                    <li
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}>
                      

                        <div>
                            <FaGripVertical className="me-2" />
                            <FaCaretRight/>
                            {module.name}
                            <br/>
                            {module.description}
                            
                            <span className="float-end">
                            <button
                               className="btn-edit"
             onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            
                              <button
                                className="btn-delete"
                onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
                                <FaCheckCircle className="text-success" />
                                <FaCaretDown/>
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                                
                            </span>
                            
                        </div>
                        <br/>
                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                                    <li className="list-group-item">
                                        <FaGripVertical className="me-2" />
                                        <span style={{paddingLeft: "20px"}}>{lesson.name}</span>
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;