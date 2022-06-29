import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import './books.css';
import { deleteBook } from './BooksSlice';


const ViewBooks = () => {
  const books = useSelector(state => state.BooksReducer.books);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteAction = id => {
    dispatch(deleteBook(id))
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
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books && books.map(book => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  {/* <td>{id}</td> */}
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, title, author }}><button>edit</button></Link>
                    <button onClick={() => deleteAction(id)} className="delete">delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBooks;