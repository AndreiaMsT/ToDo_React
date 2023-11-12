import { useState } from "react";
import { TaskBoard } from "./components/TaskBoard";
import TodoFilter from "./components/TodoFilter";
import { TodoForm } from "./components/TodoForm";
import { Task } from "./components/TaskBoard";

function App() {
  const [selectedPriority, setSelectedPriority] = useState("");

  const [tasks, setTasks] = useState<Task[]>([]);

  const visiblePriority = selectedPriority
    ? tasks.filter((task) => task.priority === selectedPriority)
    : tasks;

  return (
    <>
      <div className="mb-5">
        <TodoForm
          onSubmit={(task) =>
            setTasks([...tasks, { ...task, id: tasks.length + 1 }])
          }
        />
      </div>
      <div className="mb-5">
        <TodoFilter
          onSelectedPriority={(priority) => setSelectedPriority(priority)}
        />
      </div>

      <TaskBoard
        tasks={visiblePriority}
        onDelete={(id) => setTasks(tasks.filter((e) => e.id != id))}
      />
    </>
  );
}

export default App;
