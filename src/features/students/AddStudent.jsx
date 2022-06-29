import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "./studentSlice";
import ViewStudents from "./ViewStudents";

function AddStudent() {
  const id = useSelector(state=> state.StudentReducer.students.length +1);
  const dispatch = useDispatch();

  const handleAddStudent = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const roll = e.target.roll.value;
    const student = {id, name, roll }
    console.log(student);
    dispatch(addStudent(student))
  }
  return (
    <div>
      <h2>Add new Student</h2>
      <form onSubmit={handleAddStudent}>
        <div className="title">
          <label htmlFor="name">Name</label>
          <input name="name" type="text" id="name" placeholder='Student Name' autoComplete="off" defaultValue="Student Name" />
        </div>
        <div className="author">
          <label htmlFor="roll">roll</label>
          <input name="roll" type="text" id="roll" placeholder='Student Roll' defaultValue="Student Roll" />
        </div>
        <input type="submit" value="Add Student" />
      </form>
      <ViewStudents />
    </div>
  )
}

export default AddStudent