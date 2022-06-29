import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent } from './studentSlice';

function ViewStudents() {
  const students = useSelector(state=> state.StudentReducer.students)
  const dispatch = useDispatch();
  const deleteAction = (id) => {
    dispatch(deleteStudent(id))
  }
  return (
    <div>
    <h2>View Books</h2>
    <div className="">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.roll}</td>
            <td>
              <button onClick={() => editAction(student.id)}>edit</button>
              <button onClick={() => deleteAction(student.id)}>delete</button>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default ViewStudents