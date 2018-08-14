import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Product from "./views/Product.vue";
import ProductList from "./views/ProductList.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  // routes: [
  //   { name: "products", path: "/product", component: Product },
  //   { name: "product", path: "/product/:id", component: Product },
  // ]
  routes: [
    { name: "home", path: "/", component: Home },
    { path: "/a", redirect: "/" },
    {
      name: "products",
      path: "/product",
      component: ProductList
    },
    {
      name: "product",
      // 数字のみにマッチさせたい場合は(\\d+)をつける
      path: "/product/:id(\\d+)",
      component: Product,
      props: route => ({ id: Number(route.params.id) })
    }
  ]
});

export default router;
