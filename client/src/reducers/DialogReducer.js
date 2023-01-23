import Type from "../actions/type";

const login = {
  open: false,
};

const signUp = {
  open: false,
};

const LoginReducer = (state = login, action) => {
  switch (action.type) {
    case Type.OPEN_LOGIN:
      return {
        ...state,
        open: true,
      };

    case Type.CLOSE_LOGIN:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

const SignUpReducer = (state = signUp, action) => {
  switch (action.type) {
    case Type.OPEN_SIGN_UP:
      return {
        ...state,
        open: true,
      };

    case Type.CLOSE_SIGN_UP:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export { LoginReducer, SignUpReducer };
//End
