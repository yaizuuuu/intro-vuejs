import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleA = {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    update(state) {
      state.count += 100;
    }
  }
};

const moduleB = {
  namespaced: true,
  state: {
    count: 2
  },
  mutations: {
    update(state) {
      state.count += 200;
    }
  }
};

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  },
  state: {
    message: "初期メッセージ"
  },
  getters: {
    message(state) {
      return state.message;
    }
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message;
    }
  },
  actions: {
    doUpdate({ commit }, message) {
      commit("setMessage", { message });
    }
  }
});

export default store;
