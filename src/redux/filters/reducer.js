import { COLORCHANGED, STATUSCHANGED } from "./actionType";
import { initialState } from "./intialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED:
      const { color, changeType } = action.payload;
      if (changeType === "added") {
        return {
          ...state,
          color: [...state.color, color],
        };
      } else if (changeType === "remove") {
        return {
          ...state,
          color: state.color.filter((singleColor) => singleColor !== color),
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default reducer;
