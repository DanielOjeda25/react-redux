import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: ""
  })
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask({ ...task, id: params.id }))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid()
      }));
    }
    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [])
  return (
    <div>
      <h1>Formulario de Tareas</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={handleChange}
          value={task.title}
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          required
          value={task.description}
          name="description"
          onChange={handleChange}
        ></textarea>

        <label htmlFor="completed">Completado:</label>
        <input
          type="checkbox"
          id="completed"
        />

        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  )
}

export default TaskForm