import Type from "./type";

//This will return the action opening dialog
const openLoginDialog = () => {
  return {
    type: Type.OPEN,
  };
};

//This will return the action for closing dialog
const closeLoginDialog = () => {
  return {
    type: Type.CLOSE,
  };
};

export { openLoginDialog, closeLoginDialog };
//End
