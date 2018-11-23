import Vue from "vue";
import VueRouter from "vue-router";

import store from "./vue/store/store.js";
import HelloWorld from "./vue/components/HelloWorld/HelloWorld.vue";
import HelloFromParams from "./vue/components/HelloWorld/HelloFromParams.vue";
import TodoAppContainer from "./vue/components/TodoApp/TodoAppContainer.vue";
import MessagesContainer from "./vue/components/Messages/MessagesContainer.vue";
import MessageContainer from "./vue/components/Message/MessageContainer.vue";
import LoginContainer from "./vue/components/Login/LoginContainer.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: "/", component: HelloWorld, props: { name: "bob" } },
    { path: "/hello/:name", component: HelloFromParams, props: true },
    { path: "/todo", component: TodoAppContainer },
    { path: "/messages", component: MessagesContainer, meta: { requiresAuth: true } },
    { path: "/message/:id", component: MessageContainer, meta: { requiresAuth: true }, props: true },
    { path: "/login", component: LoginContainer, meta: { requiresNotAuth: true } }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.session.authenticated) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresNotAuth)) {
    if (store.state.session.authenticated) {
      next({
        path: from.path
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
