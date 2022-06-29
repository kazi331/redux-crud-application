import BooksSlice from "../features/books/BooksSlice";
import {configureStore} from "@reduxjs/toolkit"
import studentSlice from '../features/students/studentSlice'

export const store = configureStore({
  reducer: {
    BooksReducer: BooksSlice,
    StudentReducer: studentSlice
  }
})

export default store;