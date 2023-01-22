import Type from "../actions/type";

const login = {
  open: false,
};

const LoginReducer = (state = login, action) => {
  switch (action.type) {
    case Type.OPEN:
      return {
        ...state,
        open: true,
      };

    case Type.CLOSE:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default LoginReducer;
//End
