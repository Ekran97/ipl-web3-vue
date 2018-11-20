import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "style/application.scss";
import Vuex from "vuex";
import store from "vue/store/store.js";

Vue.use(Vuex);
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  render: h => h(App)
});
