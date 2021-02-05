import { createStore } from "redux";

const reducer = (
  prevState = {
    isShow: false,
  },
  aciton
) => {
  let { type, payload } = aciton;
  let newState = { ...prevState };

   newState.isShow = payload;
  switch (type) {
    case "Show":
      newState.isShow = payload;
      return newState;
    case "Hide":
      newState.isShow = payload;
      return newState;
    default:
      return prevState;
  }
};
const TabbarrShowStore = createStore(reducer);
export default TabbarrShowStore;
