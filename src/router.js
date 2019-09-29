import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
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
      component: () => {
        return import("./components/Profile");
      }
    }
  ]
});
