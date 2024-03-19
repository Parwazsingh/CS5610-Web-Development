import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
  assignments: db.assignments,
  assignment: { name: "", description: "" },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((Assignment) => {
        if (Assignment._id === action.payload._id) {
          console.log(state.assignments)
          return action.payload;
        } else {
          return Assignment;
        }
      });
    },
    setAssignment: (state, action) => {
        state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
   updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

