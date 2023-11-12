import priorities from "../lib/priorities";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, FormData } from "../lib/types";

interface Props {
  onSubmit: (data: FormData) => void;
}
export const TodoForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      className="m-3"
    >
      <div className="mb-3">
        <label htmlFor="description-label" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
        />
      </div>
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input {...register("date")} type="date" className="form-control" />
      </div>
      {errors.date && <p className="text-danger">{errors.date.message}</p>}
      <div className="mb-3">
        <label htmlFor="priority" className="form-label">
          Priority
        </label>
        <select {...register("priority")} className="form-select">
          <option value=""></option>
          {priorities.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>
        {errors.priority && (
          <p className="text-danger">{errors.priority.message}</p>
        )}
      </div>
      <Button onClick={() => console.log("submitted")} color="primary">
        Add task
      </Button>
    </form>
  );
};


