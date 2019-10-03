export const LOGIN_WITH_REMEMBER = (state, data) => {
  state.auth = data.login;
  state.password = data.password;
  localStorage.setItem("login", data.login);
  localStorage.setItem("password", data.password);
};

export const LOGIN_WITHOUT_REMEMBER = (state, data) => {
  state.auth.login = data.login;
  state.auth.password = data.password;
};

export const SET_USER_DATA = (state, data) => {
  state.user = data;
};
