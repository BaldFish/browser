// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Router from "vue-router";
import home from "./components/home/home";
import block from "./components/block/block";
import card from "./components/card/card";
import account from "./components/account/account";
Vue.use(Router);
Vue.config.productionTip = false;

/* eslint-disable no-new */
const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: home
    },
    {
      path: "/block",
      component: block
    },
    {
      path: "/card",
      component: card
    },
    {
      path: "/account",
      component: account
    }
  ]
});

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
