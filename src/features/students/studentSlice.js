import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialStudents = {students: [
  {id: uuidv4(), name: 'Sayem', roll: 23},
  {id: uuidv4(), name: 'Sayem', roll: 23},
]}
export const studentsSlice = createSlice({
  name: 'students',
  initialState: initialStudents,
  reducers: {
    viewStudent: state => state,
    addStudent: (state, action) => {
      state.students.push(action.payload)
    },
    deleteStudent: (state, action) => {
      const id = action.payload;
      state.students = state.students.filter(student => student.id !== id)  
    }
  }
});
export const { viewStudent, addStudent , deleteStudent} = studentsSlice.actions
export default studentsSlice.reducer