import { Cell } from "../../../state/";
import TextEditor from "../../text-editor/text-editor";
import CodeCell from './../../code-cell/code-cell';
import ActionBar from './../../action-bar/action-bar';
import './cell-list-item.css';

interface CellListItemProp {
  cell: Cell
}

const CellListItem: React.FC<CellListItemProp> = ({ cell }) => {
  return (
    <div className="cell-list-item">
      {
        cell.type === 'code'
          ? <>
            <div className="action-bar-wrapper">
              <ActionBar id={cell.id} />
            </div>
            <CodeCell cell={cell} />
          </>
          : <>
            <ActionBar id={cell.id} />
            <TextEditor cell={cell} />
          </>
      }
    </div>
  )
}

export default CellListItem;