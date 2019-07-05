import axios from "axios";

const url = `http://localhost:3000/api`;
const loginUrl = `${url}/login`;
const registroUrl = `${url}/singUp`;

const headers = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  "Content-type": "application/json"
};

export const setState = () => {
  return {
    type: "SET_STATE"
  };
};

export const login = values => dispatch => {
  axios
    .post(loginUrl, { ...values, headers })
    .then(res => {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch({
        type: "USER_SESSION",
        payload: {
          ...res.data.user,
          logout: true
        }
      });
    })
    .catch(err => {
      dispatch(openSnackbars("error", "Usuario o contraseña incorrecta"));
    });
};

export const registro = (values, callback) => dispatch => {
  const data = {
    ...values,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-type": "application/json"
    }
  };
  axios
    .post(registroUrl, { ...values, headers })
    .then(res => {
      callback();
    })
    .catch(err => {
      dispatch(openSnackbars("error", "Usuario Existente"));
    });
};

export const signOff = () => {
  localStorage.removeItem("user");
  return {
    type: "SIGN_OFF"
  };
};

export const openSnackbars = (type, message) => {
  return {
    type: "OPEN_SNACKBARS",
    payload: {
      type,
      message,
      open: true
    }
  };
};

export const closeSnackbars = values => {
  return {
    type: "CLOSE_SNACKBARS",
    payload: values
  };
};

export const verify = () => dispatch => {
  const user = localStorage.getItem("user");
  if (user) {
    dispatch({
      type: "USER_SESSION",
      payload: {
        ...JSON.parse(user),
        logout: true
      }
    });
  }
};
