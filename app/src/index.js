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

const Chapter2x11 = new Vue({
  el: "#chapter2_11",
  data: {
    message: "そのまま表示",
    url: "https://www.google.com",
    htmlTag: "Hello <strong>Vue.js!</strong>"
  },
  mounted() {
    console.log(this.$refs.hello);
  }
});
console.log(Chapter2x11);

const Chapter3x13 = new Vue({
  el: "#chapter3_13",
  data: {
    show: false,
    message: "message",
    val: false,
    arrayVal: [],
    radio: "",
    preview: "",
    range: 0
  },
  methods: {
    handleClick(a, b) {
      console.log(a, b);
    },
    handleInput(event) {
      this.message = event.target.value;
      console.log(this.message);
    },
    handler(comment) {
      console.log(comment);
    },
    close() {
      console.log("only self");
    },
    doDelete() {
      console.log("Delete");
    },
    fileChange(event) {
      const file = event.target.files[0];
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file);
      }
    }
  }
});
console.log(Chapter3x13);

const Chapter3x15 = new Vue({
  el: "#chapter3_15",
  data: {
    scrollY: 0,
    timer: null
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.timer === null) {
        this.timer = setTimeout(() => {
          console.log("test");
          this.scrollY = window.scrollY;
          clearTimeout(this.timer);
          this.timer = null;
        }, 500);
      }
    }
  }
});
console.log(Chapter3x15);
