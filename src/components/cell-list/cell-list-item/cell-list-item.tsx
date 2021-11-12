import { Cell } from "../../../state/";
import TextEditor from "../../text-editor/text-editor";
import CodeCell from './../../code-cell/code-cell';

interface CellListItemProp {
  cell: Cell
}

const CellListItem: React.FC<CellListItemProp> = ({ cell }) => {
  return <div>
    {
      cell.type === 'code'
        ? <CodeCell cell={cell} />
        : <TextEditor />
    }
  </div>;
}

export default CellListItem;