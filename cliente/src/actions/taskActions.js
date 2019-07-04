import axios from "axios";

const url = `http://localhost:3000/api`;
const loginUrl = `${url}/login`;
const registroUrl = `${url}/singUp`;

const headers = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  "Content-type": "application/json"
};

export const createTask = values => dispatch => {
  dispatch({
    type: "CREATE_TASK",
    payload: { id: 0, ...values }
  });
};

export const taskDone = values => dispatch => {
  console.log("asdasd", values);
  dispatch({
    type: "TASK_DONE",
    payload: values
  });
};

export const editTask = () => {
  const taskDone = values => dispatch => {
    dispatch({
      type: "TASK_EDIT",
      payload: values
    });
  };
};
