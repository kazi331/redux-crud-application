
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
<header>
  <nav>
    <NavLink to="/" >Home</NavLink>
    <NavLink to="/add-book" >Add Book</NavLink>
    <NavLink to="/add-student" >Add Student</NavLink>
    <NavLink to="/books" >Show Books</NavLink>
  </nav>
</header>
  );
};

export default Navbar;