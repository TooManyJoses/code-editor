import { MouseEventHandler } from "react";

interface AddCellButtonProps {
  label: string;
  handleAddCell: MouseEventHandler<HTMLButtonElement>;
}

const AddCellButton: React.FC<AddCellButtonProps> = ({ label, handleAddCell }) => {
  return (
    <button className="button is-rounded is-primary is-small" onClick={handleAddCell}>
      <span className="icon is-small">
        <i className="fas fa-plus"></i>
      </span>
      <span>{label}</span>
    </button>
  )
}

export default AddCellButton;
