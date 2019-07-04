import { Map, List } from "immutable";

const setData = (state, node, values) => state.set(node, values);

const aplicationReducer = (state = Map(), action) => {
  switch (action.type) {
    case "SET_STATE": {
      return state;
    }
    case "USER_SESSION": {
      return setData(state, "sesionUser", action.payload);
    }
    default:
      return state;
  }
};

export default aplicationReducer;
