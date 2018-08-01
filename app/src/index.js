import Vue from "vue";
import "./index.scss";

const Chapter1x1 = new Vue({
  el: "#chapter1_1",
  data: {
    message: "Hello World!!"
  }
});
// Chapter1.data.messageではない
console.log(Chapter1x1.message);

const Chapter1x5 = new Vue({
  el: "#chapter1_5",
  data: {
    list: ["りんご", "ばなな", "いちご"],
    message: "初期メッセージ",
    show: true
  },
  methods: {
    handlerClick(event) {
      alert(event.target);
      console.log(event.target, event);
    }
  }
});
Chapter1x5.list.push("おれんじ");

const Chapter2x8 = new Vue({
  el: "#chapter2_8",
  data: {
    style: "bold",
    scroll: 0
  },
  mounted() {
    this.scroll = 100;
  }
});
console.log(Chapter2x8);
