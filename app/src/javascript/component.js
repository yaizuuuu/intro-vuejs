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
      // 子に対してイベントを送信するためには$refsを使用する
      this.$refs.child.$emit("open");
      console.log(".nativeがついてないと受け取れないのよ");
    }
  },
  // 親コンポーネントからイベントをバインドさせたい場合は.nativeをつけることで可能
  // 子にイベントを送信するためにref属性を付与する
  template: `<child-emit-component @child-event="parentMethod" @click.native="doTestAction" ref="child"></child-emit-component>`
});

Vue.component("child-emit-component", {
  created() {
    // 親からのイベントを受け取る際はonで紐付けを行う
    this.$on("open", () => {
      alert("親からのイベント送信を子が受け取る");
    });
  },
  methods: {
    handlerClick() {
      // $emitで親に対してイベントを送信する
      this.$emit("child-event");
    }
  },
  template: `<button @click="handlerClick">イベントの送信</button>`
});

Vue.component("parent-method", {
  data() {
    return {
      parentData: "親のデータ"
    };
  },
  methods: {
    parentMethod(childArgs, parentArgs) {
      // 子側のデータを第一引数で受け取れる($event)
      console.log(childArgs, parentArgs);
    }
  },
  template: `<child-method @child-method="parentMethod($event, parentData)"></child-method>`
});

Vue.component("child-method", {
  methods: {
    childMethod() {
      // 親に対して、子からデータを送信できる
      this.$emit("child-method", { id: 1, name: "新しい名前" });
    }
  },
  template: `<p @click="childMethod">テストだよ〜</p>`
});

Vue.component("parent-slot", {
  template:
    "<child-slot>" +
    // slotタグのnameを合わせることで自由に変えられる
    `<p slot="header">` +
    "Hello Vue.js!!" +
    "</p>" +
    "Vue.jsはJavaScriptのフレームワーク" +
    `<footer slot="footer">これはフッター</footer>` +
    `<div slot="text1"><p>こんな</p><p>使い方でいいのかな</p></div>` +
    "</child-slot>"
});

Vue.component("child-slot", {
  template:
    `<section class="slot-child">` +
    "<header>" +
    `<slot name="header">デフォルトタイトル</slot>` +
    "</header>" +
    `<div class="content">` +
    "<slot>デフォルトコンテンツ</slot>" +
    "</div>" +
    `<slot name="footer"><!-- 何もなければ表示しない --></slot>` +
    // TODO テンプレートタグとslotをあわせた使い方を調べる
    `<template slot="text1">テキスト1</template>` +
    "</section>"
});

Vue.component("scope-slot-child", {
  data() {
    return {
      list: ["カレー", "ハヤシ", "シチュー"]
    };
  },
  template: `<div class="scope-slot-child"><slot v-for="item in list" :item="item"></slot></div>`
});

Vue.component("scope-slot-parent", {
  template:
    "<scope-slot-child>" +
    // slot-scopeで子側のデータを受け取る
    `<p slot-scope="args">{{ args.item }}</p>` +
    "</scope-slot-child>"
});

Vue.component("parent-calender", {
  template: `<child-calender v-model="date"></child-calender>`
});

Vue.component("parent-calender", {
  data() {
    return {
      date: ""
    };
  },
  template: `<child-calender v-model="date"><p slot="ymd">{{ date }}</p></child-calender>`
});

Vue.component("child-calender", {
  methods: {
    sendDate() {
      this.$emit("input", new Date());
    }
  },
  template: `<p @click="sendDate">カレンダー<slot name="ymd"></slot></p>`
});

Vue.component("sync-parent", {
  data() {
    return {
      name: "スライム",
      hp: 50
    };
  },
  // syncをつけることによって子からのデータをupdateイベントによって受け取れる
  template: `<sync-child :name.sync="name" :hp.sync="hp"></sync-child>`
});

Vue.component("sync-child", {
  props: {
    name: {
      type: String,
      default: ""
    },
    hp: {
      type: Number,
      default: 0
    }
  },
  computed: {
    localName: {
      get() {
        return this.name;
      },
      set(val) {
        // どの値をupdateするのかをコロン後に指定
        this.$emit("update:name", val);
      }
    },
    localHp: {
      get() {
        return this.hp;
      },
      set(val) {
        this.$emit("update:hp", val);
      }
    }
  },
  template: `<div class="sync-child"><p>名前: {{ name }} HP: {{ hp }}</p><p>名前 <input v-model="localName"><p>HP <input v-model.number="localHp"></p></div>`
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
