import { useActions } from '../hooks/useActions';
import AddCellButton from './add-cell-button';
import './add-cell.css';

interface AddCellProps {
  nextCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className="add-cell">
      <div className="add-buttons">
        <AddCellButton label="Code" handleAddCell={() => insertCellAfter(nextCellId, 'code')} />
        <AddCellButton label="Text" handleAddCell={() => insertCellAfter(nextCellId, 'text')} />
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default AddCell;
