import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Product from "./views/Product.vue";
import ProductList from "./views/ProductList.vue";
import store from "./store";

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
      component: ProductList,
      /**
       * beforeEnter: ルートの遷移前
       * beforeRouteEnter: コンポーネントへ遷移する前
       * beforeRouteUpdate: コンポーネントでルートが更新される前
       * beforeRouteLeave: コンポーネントから遷移する前
       */
      // このルートの遷移前に処理をフックできる
      // beforeEnter(to, from, next) {
      //   console.log("route:beforeEnter");
      //   console.log(to, from, next);
      //   // 任意のルートにリイダイレクトもできる
      //   // next({ path: "/" });
      //   // 遷移しても良いのであればnext()を実行
      //   next();
      // }
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

// グローバルのガード, どのガードに対してもフックできる
// beforeEach: すべてのルートの遷移前, コンポネントガードの解決前
router.beforeEach((to, from, next) => {
  console.log("global:beforeEach");
  store.commit("view/start");
  next();
  // setTimeout(next, 1000);
});

// beforeResolve: すべてのルートの遷移後, コンポーネントガードの解決後
// router.beforeResolve((to, from, next) => {
//   console.log("global:beforeResolve");
//   next();
// });

// afterEach: すべてのルートの遷移後
router.afterEach((to, from) => {
  console.log("global:afterEach");
  store.commit("view/end");
  // 遷移後のため, next()は必要ない
});

export default router;
