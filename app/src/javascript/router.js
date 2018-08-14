import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Product from "./views/Product.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { name: "home", path: "/", component: Home },
    { name: "products", path: "/product", component: Product },
    { name: "product", path: "/product/:id", component: Product },
    { path: "/a", redirect: "/" }
  ]
});

export default router;
