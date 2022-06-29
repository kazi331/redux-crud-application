import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const location = useLocation();
const {id, author, title } = location.state
const handleEditBook = e => {
  e.preventDefault();
  const title = e.target.title.value;
  const author = e.target.author.value;
  dispatch(updateBook({id, title, author}));
navigate('/books')

}
  return (
    <div>
      <h2>Edit book</h2>
      <form onSubmit={handleEditBook}>
        <div className="title">
          <label htmlFor="title">Title</label>
          <input name="title"  type="text" id="title" placeholder='Book Title' autoComplete="off" defaultValue={title} />
        </div>
        <div className="author">
          <label htmlFor="author">Author</label>
          <input name="author" type="text" id="author" placeholder='Author Name'  defaultValue={author} />
        </div>
        <input type="submit" value="Update Book" />
      </form>
    </div>
  );
};

export default EditBook;