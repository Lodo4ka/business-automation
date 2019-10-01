import Vue from "vue";
import Router from "vue-router";
// import store from "./store";

Vue.use(Router);
let login = localStorage.getItem("login");
let password = localStorage.getItem("password");

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/authorization",
      name: "authorization",
      component: () => import("./components/Authorization.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./components/Profile"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "*",
      redirect: "profile"
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (to.params.login && to.params.password) {
      login = to.params.login;
      password = to.params.password;
    }
    if (!login && !password) {
      next({
        path: "/authorization"
      });
    } else {
      next();
    }
  } else if (to.fullPath === "/authorization" && login && password) {
    next(false);
  } else {
    next();
  }
});

export default router;
