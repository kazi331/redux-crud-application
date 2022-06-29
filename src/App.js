import { Route, Routes } from "react-router-dom";
import AddBook from "./features/books/AddBook";
import ViewBooks from "./features/books/ViewBooks";
import AddStudent from "./features/students/AddStudent";
import Navbar from "./layouts/Navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<ViewBooks />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
