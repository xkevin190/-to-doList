import { Map, List } from "immutable";

const setData = (state, node, values) => state.set(node, values);

const initalState = Map({
  snackBars: {
    type: "success",
    message: "",
    open: false
  }
});
const aplicationReducer = (state = initalState, action) => {
  switch (action.type) {
    case "OPEN_SNACKBARS": {
      return setData(state, "snackBars", action.payload);
    }
    case "CLOSE_SNACKBARS": {
      return setData(state, "snackBars", action.payload);
    }

    case "SET_STATE": {
      return state;
    }
    case "USER_SESSION": {
      return setData(state, "sesionUser", action.payload);
    }

    case "SIGN_OFF": {
      return initalState;
    }
    default:
      return state;
  }
};

export default aplicationReducer;
