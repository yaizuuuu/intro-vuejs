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
    scroll: 0,
    count: 0,
    isChild: true,
    isActive: true,
    textColor: "red",
    backgroundColor: "lightgray",
    classObject: {
      child: true,
      "is-active": false
    },
    styleObject: {
      backgroundColor: "red",
      // TODO: widthは渡せない??調べる
      width: 600,
      color: "white"
    },
    // 属性をそのまま渡せる
    item: {
      id: 1,
      src: "item1.jpg",
      alt: "商品1サムネイル",
      width: 250,
      height: 200
    },
    radius: 50
  },
  mounted() {
    this.scroll = 100;
  },
  methods: {
    increment() {
      this.count += 1;
    },
    incrementDelay() {
      setTimeout(() => {
        this.count += 1;
      }, 300);
    }
  }
});
console.log(Chapter2x8);
