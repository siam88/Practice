import * as actionType from "../action.jsx";
const initialState = {
  counter: 0
};
const counterReducer = (state = initialState, action) => {
  if (action.type === actionType.INCREASE) {
    return {
      ...state,
      counter: state.counter + action.value
    };
  } else if (action.type === actionType.DECREASE) {
    return {
      ...state,
      counter: state.counter - 1
    };
  }
  return state;
};
export default counterReducer;
