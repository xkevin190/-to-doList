import { Map, List } from "immutable";

const setData = (state, node, values) => state.set(node, values);

const setArray = (state, node, payload) => {
  const result = state.get("task");
  console.log(result);
  console.log(payload);
  const task = result.concat({ ...payload });

  return state.set(node, task);
};

const uddateIN = (state, node, field, payload) => {
  const index = state.get(node).findIndex(data => {
    return data.id === payload.id;
  });
  const result = state.get("task");
  if (field === "done") {
    console.log("dasdasdasd  name", field);
    result[index].done = !payload.done;
  } else if (field === "task_name") {
    console.log("dasdasdasd  name", field);
    result[index].task_name = payload.task_name;
  }

  return state.set(result);
};

const initialState = Map({
  task: []
});

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TASK": {
      return setArray(state, "task", action.payload);
    }

    case "TASK_DONE": {
      return uddateIN(state, "task", "done", action.payload);
    }

    case "TASK_EDIT": {
      return uddateIN(state, "task", "task_name", action.payload);
    }
    default:
      return state;
  }
};

export default taskReducer;
