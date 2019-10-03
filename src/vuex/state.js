export default {
  auth: {
    login: localStorage.getItem("login") || "",
    password: localStorage.getItem("password") || ""
  },
  user: {
    job: "",
    fullName: "",
    email: "",
    tel: ""
  }
};
