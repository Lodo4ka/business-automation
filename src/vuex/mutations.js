export const loginWithRemember = (state, data) => {
  state.auth = data.login;
  state.password = data.password;
  localStorage.setItem("login", data.login);
  localStorage.setItem("password", data.password);
};

export const loginWithoutRemember = (state, data) => {
  state.auth = data.login;
  state.password = data.password;
};
