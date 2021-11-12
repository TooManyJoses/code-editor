import { useActions } from './../hooks/useActions';
import ActionButton from './action-button';
import './action-bar.css';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className="action-bar">
      <ActionButton iconName="fa-arrow-up" handleClick={() => moveCell(id, 'up')} />
      <ActionButton iconName="fa-arrow-down" handleClick={() => moveCell(id, 'down')} />
      <ActionButton iconName="fa-times" handleClick={() => deleteCell(id,)} />
    </div>
  )
}

export default ActionBar;