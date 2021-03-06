import { Fragment } from "react";
import AddCell from "../add-cell/add-cell";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CellListItem from "./cell-list-item/cell-list-item";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => {
      return data[id]
    })
  })

  const renderedCells = cells.map(cell => (
    <Fragment key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellListItem cell={cell} />
    </Fragment>
  ))

  return <div>{renderedCells}

    <AddCell nextCellId={null} />
  </div>
}

export default CellList;