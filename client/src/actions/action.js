import Type from "./type";

//This will return the action for increasing the count
const increaseCount = () => {
  return {
    type: Type.INCREASE,
  };
};

//This will return the action for decreasing the count
const decreaseCount = () => {
  return {
    type: Type.DECREASE,
  };
};

export { increaseCount, decreaseCount };
//End
