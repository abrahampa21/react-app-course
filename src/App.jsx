import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function App() {
  const { tasks, createTask, deleteTask } = useContext(TaskContext);
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm createTask={createTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </main>
  );
}

export default App;
