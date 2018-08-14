import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

window.vm = new Vue({
  el: "#chapter8-44",
  router,
  store,
  render: h => h(App)
});

console.log(store.state.moduleA.count, store.state.moduleB.count);
store.commit("moduleA/update");
console.log(store.state.moduleA.count, store.state.moduleB.count);
store.commit("moduleB/update");
console.log(store.state.moduleA.count, store.state.moduleB.count);
