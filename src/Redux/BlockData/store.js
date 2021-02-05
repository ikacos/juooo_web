import { createStore } from "redux";

const reducer = (
  prevState = {
  },
  aciton
) => {
  let { type, payload, CurrentKey } = aciton;
  let newState = { ...prevState };
  console.log(prevState);
  switch (type) {
    case "SaveContent":
      newState.content = payload;
      return newState;
    case "CurrentKey":
      newState.key = CurrentKey;
      return newState;
    default:
      return prevState;
  }
};
const GaikuangAndZhinengzhixunStore = createStore(reducer);
export default GaikuangAndZhinengzhixunStore;
