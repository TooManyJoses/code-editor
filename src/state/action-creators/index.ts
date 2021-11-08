import { ActionType } from "../action-types";
import { UpdateCellAction, MoveCellAction, InsertCellBeforeAction, DeleteCellAction } from '../actions';
import { CellTypes, Directions } from "../cell";

export const updateCell = (id: string, content: string): UpdateCellAction => {

  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    }
  };
};

export const moveCell = (id: string, direction: Directions): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    }
  }
};

export const insertCellBefore = (id: string, cellType: CellTypes): InsertCellBeforeAction => {
  return {
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
      id,
      type: cellType,
    }
  }
};

export const deleteCell = (type: string, id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  }
};
