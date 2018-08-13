import Vue from "vue";
import App from "./App.vue";
import store from "./store";

window.vm = new Vue({
  el: "#chapter8-44",
  store,
  render: h => h(App)
});
