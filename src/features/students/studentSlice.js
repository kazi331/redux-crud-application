import {createSlice} from '@reduxjs/toolkit'

const initialStudents = {students: [
  {id: 1, name: 'Sayem', roll: 23},
  {id: 2, name: 'Sayem', roll: 23},
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