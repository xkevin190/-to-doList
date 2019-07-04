export const setState = () => {
  return {
    type: "SET_STATE"
  };
};

export const login = values => dispatch => {
  dispatch({
    type: "USER_SESSION",
    payload: {
      ...values,
      logout: true
    }
  });
};
