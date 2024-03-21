import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
  modules: db.modules,
  module: { name: "", description: "" },
};


var lessons = [{
  "_id": "L2001",
  "name": "LEARNING OBJECTIVES",
  "description": "A brief history of rocketry and space exploration.",
  "module": "M101"
},
{
  "_id": "L2002",
  "name": "Learn how to create user interfaces with HTML",
  "description": "Basic principles of rocket propulsion.",
  "module": "M101"
},
{
  "_id": "L203",
  "name": "Keep working on assignment 1",
  "description": "Overview of different types of rocket engines.",
  "module": "M101"
},
{
  "_id": "L204",
  "name": "Deploy the assignment to Netlify",
  "description": "Overview of different types of rocket engines.",
  "module": "M101"
},
{
  "_id": "L205",
  "name": "READING",
  "description": "Overview of different types of rocket engines.",
  "module": "M101"
},
{
  "_id": "L206",
  "name": "Full Stack Developer - Chapter 1 - Introduction",
  "description": "Overview of different types of rocket engines.",
  "module": "M101"
},
{
  "_id": "L207",
  "name": "Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML",
  "description": "Overview of different types of rocket engines.",
  "module": "M101"
}

];

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      const _id = new Date().getTime().toString();
      const current_lessons = lessons.map(lesson => { lesson.module = _id; return lesson; });
      console.log(current_lessons);
      state.modules = [
        { ...action.payload, lessons: current_lessons, _id },
          ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;

