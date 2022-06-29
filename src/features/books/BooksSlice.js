import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


const initialBooks = {
  books: [
    { id: uuidv4(), title: 'Book Title', author: 'Sayem' },
    { id: uuidv4(), title: 'Book Title', author: 'Sayem' },
  ]

}

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    // show current books 
    showBooks: state => state,
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter(book => book.id !== id);
      console.log(id)
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const exist = state.books.filter(book => book.id === id);
      if (exist) {
        exist[0].title = title;
        exist[0].author = author;
      }

    }

  }
})

// export acttions 
export const { showBooks, addBook, deleteBook, updateBook } = booksSlice.actions
export default booksSlice.reducer