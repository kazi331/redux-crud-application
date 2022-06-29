import { createSlice } from '@reduxjs/toolkit';

const initialBooks = {
  books: [
    { id: 1, title: 'Book Title', author: 'Sayem' },
    { id: 2, title: 'Book Title', author: 'Sayem' },
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
    }

  }
})

// export acttions 
export const { showBooks, addBook, deleteBook } = booksSlice.actions
export default booksSlice.reducer