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
  methods: {
    handleAttack(id) {
      // findは参照渡しをする
      const item = this.list.find(el => el.id === id);

      if (item !== "undefined" && item.hp > 0) {
        item.hp -= 10;
      }
    }
  },
  // objectを渡して、<nest-child v-bind="object">のようにも記述できる
  template:
    "<ul>" +
    `<nest-child v-for="item in list" :key="item.id" :name="item.name" :hp="item.hp" @attack="handleAttack">` +
    "</nest-child>" +
    "</ul>"
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
    },
    propA: {
      type: Object,
      default() {
        return {
          aaa: "bbb"
        };
      }
    },
    id: {
      type: Number,
      default: 1,
      require: false,
      validator(value) {
        return value > 0;
      }
    }
  },
  methods: {
    doAttack() {
      this.$emit("attack", this.id);
    }
  },
  template:
    "<li>{{ name }} HP.{{ hp }}" +
    `<button @click="doAttack">攻撃する</button></li>`
});

Vue.component("parent-emit-component", {
  methods: {
    parentMethod() {
      alert("アラートを受け取りました");
    },
    doTestAction() {
      console.log(".nativeがついてないと受け取れないのよ");
    }
  },
  // 親コンポーネントからイベントをバインドさせたい場合は.nativeをつけることで可能
  template: `<child-emit-component @child-event="parentMethod" @click.native="doTestAction"></child-emit-component>`
});

Vue.component("child-emit-component", {
  methods: {
    handlerClick() {
      // $emitで親に対してイベントを送信する
      this.$emit("child-event");
    }
  },
  template: `<button @click="handlerClick">イベントの送信</button>`
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
