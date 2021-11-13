import { useActions } from '../components/hooks/useActions';
import AddCellButton from './add-cell-button';
import './add-cell.css';

interface AddCellProps {
  nextCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
  const { insertCellBefore } = useActions();
  return (
    <div className="add-cell">
      <div className="add-buttons">
        <AddCellButton label="Code" handleAddCell={() => insertCellBefore(nextCellId, 'code')} />
        <AddCellButton label="Text" handleAddCell={() => insertCellBefore(nextCellId, 'text')} />
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default AddCell;
