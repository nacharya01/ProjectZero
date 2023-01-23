import Type from "./type";

//This will return the action opening dialog
const openLoginDialog = () => {
  return {
    type: Type.OPEN_LOGIN,
  };
};

//This will return the action for closing dialog
const closeLoginDialog = () => {
  return {
    type: Type.CLOSE_LOGIN,
  };
};

//This will return the action opening dialog
const openSignUpDialog = () => {
  return {
    type: Type.OPEN_SIGN_UP,
  };
};

//This will return the action for closing dialog
const closeSignUpDialog = () => {
  return {
    type: Type.CLOSE_SIGN_UP,
  };
};

export { openLoginDialog, closeLoginDialog,openSignUpDialog,closeSignUpDialog };
//End
