import Vue from "vue";
import Vuex from "vuex";
import theme from "./modules/theme.js";
import session from "./modules/session.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    theme,
    session
  }
});
