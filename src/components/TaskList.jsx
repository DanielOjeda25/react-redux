import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice"
import { Link } from "react-router-dom"

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  return (
    <>
      <header>
        <h1>Tasks {tasks.length}</h1>
        <Link to={'/form'}>Create a new task</Link>
      </header>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id}>
            <h2 >{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <Link to={`/edit/${task.id}`}>Edit</Link>
          </div>
        ))}
      </div>
    </>
  )

}

export default TaskList