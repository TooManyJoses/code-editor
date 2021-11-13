import { MouseEventHandler } from "react";

interface AddCellButton {
  label: string;
  handleAddCell: MouseEventHandler<HTMLButtonElement>;
  // nextCellId: string | null;
}

const AddCellButton: React.FC<AddCellButton> = ({ label, handleAddCell }) => {
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
