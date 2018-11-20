import Vue from "vue";
import Vuex from "vuex";
import * as Theme from "./ThemeStore";
import * as Session from "./SessionStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, Theme.state, Session.state),
  mutations: Object.assign({}, Theme.mutations, Session.mutations),
  getters: Object.assign({}, Theme.getters, Session.getters)
});
