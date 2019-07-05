import { Map, List } from "immutable";

const setData = (state, node, values) => state.set(node, values);

const setArray = (state, node, payload) => {
  const result = state.get("task");
  const task = result.concat({ ...payload });
  return state.set(node, task);
};

const UpdateTaskName = (state, payload) => {
  const result = state.toJS();

  const index = result.task.findIndex(data => {
    return data.id === payload.id;
  });

  result.task[index].task_name = payload.task_name;

  return Map(result);
};

const updateDone = (state, payload) => {
  const result = state.toJS();

  const index = result.task.findIndex(data => {
    return data.id === payload.id;
  });

  result.task[index].done = !payload.done;

  return Map(result);
};

const taskReducer = (state = Map(), action) => {
  switch (action.type) {
    case "CREATE_TASK": {
      return setArray(state, "task", action.payload);
    }

    case "TASK_DONE": {
      return updateDone(state, action.payload);
    }

    case "TASK_EDIT": {
      return UpdateTaskName(state, action.payload);
    }

    case "GET_ALL_TASK": {
      return setData(state, "task", action.payload);
    }
    default:
      return state;
  }
};

export default taskReducer;
