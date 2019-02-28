import * as actionType from "../action.jsx";
const initialState = {
  counter2: 0
};
const secondReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREASE2:
      return {
        ...state,
        counter2: state.counter2 + 1
      };

    case actionType.DECREASE2:
      return {
        ...state,
        counter2: state.counter2 - 1
      };
  }

  return state;
};

export default secondReducer;
