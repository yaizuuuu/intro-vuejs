import Vue from "vue";
import _ from "lodash";
import "../scss/transition.scss";

Vue.component("my-circle", {
  data() {
    return {
      toggle: false
    };
  },
  computed: {
    fill() {
      return this.toggle ? "lightpink" : "skyblue";
    }
  },
  // TODO: transitionが全然動かない, 調査
  template: `<div><button @click="toggle = !toggle">切り替え</button><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><transition name="circle"><circle cx="80" cy="75" r="50" :fill="fill"></circle></transition></svg></div>`
});

window.vm = new Vue({
  el: "#chapter6-28",
  data: {
    show: true,
    count: 0,
    order: false,
    list: [
      { id: 1, name: "りんご", price: 100 },
      { id: 2, name: "ごりら", price: 200 },
      { id: 3, name: "らっぱ", price: 300 }
    ]
  },
  computed: {
    sortedList() {
      return _.orderBy(this.list, "price", this.order ? "asc" : "desc");
    }
  }
});
