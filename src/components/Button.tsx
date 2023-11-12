interface Props {
  children: string;
  color?: "primary" | "outline-danger";
  onClick: () => void;
}

export const Button = ({ children, color, onClick }: Props) => {
  return (
    <button type="submit" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};
