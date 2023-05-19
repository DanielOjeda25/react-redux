import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Hola</h1>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/form" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App