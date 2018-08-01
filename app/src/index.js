import Vue from 'vue'
import './index.scss'

const Chapter1_1 = new Vue({
  el: '#chapter1_1',
  data: {
    message: 'Hello World!!',
  },
})
// Chapter1.data.messageではない
console.log(Chapter1_1.message)

const Chapter1_5 = new Vue({
  el: '#chapter1_5',
  data: {
    list: [
      'りんご',
      'ばなな',
      'いちご',
    ],
    message: '初期メッセージ',
    show: true,
  },
  methods: {
    handlerClick(event) {
      alert(event.target);
      console.log(event.target, event);
    }
  },
})
Chapter1_5.list.push('おれんじ')
