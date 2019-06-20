import Vue from "vue";
import Router from "vue-router";
import Login from "./modules/login/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index.html",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
