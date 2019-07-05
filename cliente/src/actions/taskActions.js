import axios from "axios";

const url = `http://localhost:3000/api`;
const loginUrl = `${url}/login`;
const registroUrl = `${url}/singUp`;
const getTask = `${url}/getTask`;
const taskEditUrl = `${url}/taskEdit`;
const createTaskUrl = `${url}/createTask`;

const headers = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  "Content-type": "application/json"
};

export const createTask = (values, callback) => dispatch => {
  axios.post(createTaskUrl, { ...values, headers }).then(res => {
    callback();
    dispatch({
      type: "CREATE_TASK",
      payload: res.data.data.newTask
    });
  });
};

export const taskDone = values => dispatch => {
  axios
    .put(taskEditUrl + `/${values.id}`, {
      ...values,
      done: !values.done,
      headers
    })
    .then(res => {
      dispatch({
        type: "TASK_DONE",
        payload: {
          ...values
        }
      });
    });
};

export const editTask = (values, callback) => dispatch => {
  axios
    .put(taskEditUrl + `/${values.id}`, {
      ...values,
      headers
    })
    .then(res => {
      callback();
      dispatch({
        type: "TASK_EDIT",
        payload: {
          ...values
        }
      });
    });
};

export const allTask = idUser => dispatch => {
  axios
    .get(`${getTask}/${idUser}`)
    .then(res => {
      dispatch({
        type: "GET_ALL_TASK",
        payload: res.data.data.taskResult
      });
    })
    .catch(err => {});
};
