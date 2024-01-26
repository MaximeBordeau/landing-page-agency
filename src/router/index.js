import Vue from "vue";
import VueRouter from "vue-router";

import Index1 from "./pages/index1.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index-1",
    component: Index1
  },
  {
    path: "/index-1",
    component: Index1
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
