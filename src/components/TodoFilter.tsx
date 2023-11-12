import priorities from "../lib/priorities";

interface Props {
  onSelectedPriority: (priority: string) => void;
}

const TodoFilter = ({ onSelectedPriority }: Props) => {
  return (
    <div className="m-3">
      <select
        className="form-select"
        onChange={(event) => onSelectedPriority(event.target.value)}
      >
        <option value="">Select Priority</option>
        {priorities.map((priority) => (
          <option key={priority} value={priority}>
            {priority}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TodoFilter;
