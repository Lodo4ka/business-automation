import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import PageNotFound from "./components/PageNotFound";

Vue.use(Router);

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
      component: PageNotFound,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const { login, password } = store.state.auth;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!login && !password) {
      next({
        path: "/authorization",
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  }
  // else if (to.fullPath === "/authorization" && login && password) {
  // }
  else {
    next();
  }
});

export default router;
