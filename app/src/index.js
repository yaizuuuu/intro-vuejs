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
      // TODO: style属性でwidthは渡せない??調べる
      width: 600,
      color: "white"
    },
    // 属性をそのまま渡せる
    item: {
      id: 1,
      src: "item1.jpg",
      alt: "商品1サムネイル",
      // width属性なら渡せる
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

const Chapter2x9 = new Vue({
  el: "#chapter2_9",
  data: {
    isDisplay: true,
    type: "C",
    isLoaded: true,
    list: {
      item1: 1,
      item2: 2,
      item3: 3
    },
    name: "キマイラ",
    monsters: [
      { id: 1, name: "スライム", hp: 100 },
      { id: 2, name: "ゴブリン", hp: 200 },
      { id: 3, name: "ドラゴン", hp: 500 }
    ]
  },
  created() {
    this.monsters.forEach(item => {
      this.$set(item, "isActive", false);
    });

    this.$set(this.monsters, 0, {
      id: 1,
      name: "キングスライム",
      hp: 1000
    });

    this.monsters = this.monsters.filter(el => el.hp >= 300);
  },
  methods: {
    doAdd() {
      const max = this.monsters.reduce((a, b) => (a > b.id ? a : b.id), 0);

      this.monsters.push({
        id: max + 1,
        name: this.name,
        hp: 500
      });
    },
    doRemove(index) {
      this.monsters.splice(index, 1);
    },
    doAttack(index) {
      this.monsters[index].hp -= 10;
    }
  }
});
console.log(Chapter2x9);
