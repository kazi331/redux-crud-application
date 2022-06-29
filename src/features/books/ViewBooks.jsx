import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './books.css';
import { deleteBook } from './BooksSlice';


const ViewBooks = () => {
  const books = useSelector(state => state.BooksReducer.books);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteAction = id => {
  dispatch(deleteBook(id))  
  }
  const editAction = id => {
    console.log("edit", id)
  }

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <button onClick={goBack}> Go Back</button>
      <h2>View Books</h2>
      <div className="">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => editAction(book.id)}>edit</button>
                <button onClick={() => deleteAction(book.id)}>delete</button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBooks;