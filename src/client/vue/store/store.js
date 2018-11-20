import Vue from "vue";
import Vuex from "vuex";
import * as Theme from "./ThemeStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, Theme.state),
  mutations: Object.assign({}, Theme.mutations),
  getters: Object.assign({}, Theme.getters)
});
