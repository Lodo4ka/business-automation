import Vue from "vue";
import Router from "vue-router";

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
      path: "/",
      name: "main",
      component: () => import("./components/MainLayout.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/loading",
      name: "loading",
      component: () => import("./components/Loading"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/error",
      name: "error",
      component: () => import("./components/ErrorPage"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "*",
      redirect: "main",
      meta: {
        requiresAuth: true
      }
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
