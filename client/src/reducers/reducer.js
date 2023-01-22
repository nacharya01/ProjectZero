//This is the just the sample

import Type from "../actions/type";

const firstState = {
  count: 0,
};

const Reducer = (state = firstState, action) => {
  switch (action.type) {
    case Type.INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };

    case Type.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default Reducer;
//End
