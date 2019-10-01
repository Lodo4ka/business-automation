export const loginWithRemember = (store, data) => {
  store.commit("loginWithRemember", data);
};

export const loginWithoutRemember = (store, data) => {
  store.commit("loginWithoutRemember", data);
};
