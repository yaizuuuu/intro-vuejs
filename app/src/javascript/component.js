import Vue from "vue";

Vue.component("parent-component", {
  data() {
    return {
      word: "これはメッセージ"
    };
  },
  // 子コンポーネントのidは上書きされる、classは追記
  template: `<p><comp-child id="parent" :val="word" class="item parent"></comp-child><comp-child val="word" class="item"></comp-child></p>`
});

Vue.component("comp-child", {
  props: {
    val: {
      type: String,
      default: "A"
    }
  },
  template: `<p id="child" class="child">{{ val }}</p>`
});

Vue.component("nest-parent", {
  data() {
    return {
      list: [
        { id: 1, name: "スライム", hp: 100 },
        { id: 2, name: "ゴブリン", hp: 300 },
        { id: 3, name: "ドラゴン", hp: 500 }
      ]
    };
  },
  template: `<ul><nest-child v-for="item in list" :key="item.id" :name="item.name" :hp="item.hp"></nest-child></ul>`
});

Vue.component("nest-child", {
  props: {
    name: {
      type: String,
      default: "スライム"
    },
    hp: {
      type: Number,
      default: 100
    }
  },
  template: "<li>{{ name }} HP.{{ hp }}</li>"
});

const myComponent = {
  // 複数要素は登録できない
  // template: "<div><p>{{ message }}</p></div><div></div>",
  // 親要素が一つであれば複数要素を登録できる
  template: "<div><p>{{ message }}</p><p>Vue.js</p></div>",
  // componentの場合dataは関数になる
  data() {
    return {
      message: "Hello Vue.js"
    };
  }
};

window.vm = new Vue({
  el: "#chapter4-22",
  components: {
    "my-component": myComponent
  }
});
