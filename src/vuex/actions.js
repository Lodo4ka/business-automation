export const LOGIN_WITH_REMEMBER = (store, data) => {
  store.commit("LOGIN_WITH_REMEMBER", data);
};

export const LOGIN_WITHOUT_REMEMBER = (store, data) => {
  store.commit("LOGIN_WITHOUT_REMEMBER", data);
};

export const SET_USER_DATA = (store, data) => {
  store.commit("SET_USER_DATA", data);
};
