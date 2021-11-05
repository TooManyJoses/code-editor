import { ActionType } from "../action-types";
import { Action } from '../actions';
import { Cell } from "../cell";

interface StateOfCells {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  }
}

const initialState: StateOfCells = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const reducer = (state: StateOfCells = initialState, action: Action): StateOfCells => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      return state;
    case ActionType.MOVE_CELL:
      return state;
    case ActionType.INSERT_CELL_BEFORE:
      return state;
    case ActionType.DELETE_CELL:
      return state;
    default:
      return state;
  }
};

export default reducer;
