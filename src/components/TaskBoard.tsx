import { Button } from "./Button";

export interface Task {
  id: number;
  description: string;
  date: Date;
  priority: string;
}

interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
}

export const TaskBoard = ({ tasks, onDelete }: Props) => {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <div className="m-3">
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <h4>{task.description}</h4>
            <p>{task.date.toDateString()}</p>
            <p>{task.priority}</p>{" "}
            <div className="mb-5">
              <Button color="outline-danger" onClick={() => onDelete(task.id)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

