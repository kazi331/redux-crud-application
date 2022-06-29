import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './addBook.css';
import { addBook } from './BooksSlice';
import ViewBooks from './ViewBooks';


const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [title, setTitle] = useState("")
  const id = useSelector(state => state.BooksReducer.books.length + 1);
  // const [author, setAuthor] = useState("")

  const [number, setNumber] = useState(1)

  const handleAddBook = (e) => {
    e.preventDefault();
    setNumber(number + 1)

    const title = e.target.title.value;
    const author = e.target.author.value;
    const book = { title, author, id }

    dispatch(addBook(book))
    // navigate('/books', {replace: true})
  }

  return (
    <div>
      <h2>Add new book</h2>
      <form onSubmit={handleAddBook}>
        <div className="title">
          <label htmlFor="title">Title</label>
          <input name="title"  type="text" id="title" placeholder='Book Title' autoComplete="off" defaultValue={`Book ${number }`} />
        </div>
        <div className="author">
          <label htmlFor="author">Author</label>
          <input name="author" type="text" id="author" placeholder='Book Writer'  defaultValue={`author ${number}`} />
        </div>
        <input type="submit" value="Add Book" />
      </form>
      <ViewBooks />
    </div>
  );
};

export default AddBook;
