import {
  ADDED,
  TOGGLED,
  ALLCOMPLETED,
  COLORSELECTED,
  DELETED,
  CLEARCOMPLETED,
} from "./actionType";
import { initialState } from "./initialState";
const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todos) => Math.max(maxId, todos.id), -1);
  return maxId + 1;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
          color: "",
        },
      ];
    case TOGGLED:
      return state.map((todos) => {
        if (todos.id !== action.payload) {
          return todos;
        } else {
          return {
            ...todos,
            completed: !todos.completed,
          };
        }
      });

    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todos) => {
        if (todos.id !== todoId) {
          return todos;
        } else {
          return {
            ...todos,
            color: color,
          };
        }
      });
    case DELETED:
      return state.filter((todos) => todos.id !== action.payload);
    case ALLCOMPLETED:
      return state.map((todos) => {
        return {
          ...todos,
          completed: true,
        };
      });
    case CLEARCOMPLETED:
      return state.map((todos) => {
        return {
          ...todos,
          completed: false,
        };
      });
    default:
      return state;
  }
};
export default reducer;
