import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//import auth from "react/contexts/authentication.js"/
import HelloWorld from "./vue/components/HelloWorld/HelloWorld.vue"
//import HelloFromParams from "./vue/components/hello_world/hello_from_params"
import TodoAppContainer from "./vue/components/TodoApp/TodoAppContainer.vue"
//import MessagesContainer from "./vue/components/messages/messages_container"
//import MessageContainer from "./vue/components/message/message_container"
//import LoginContainer from "./vue/components/login/login_container"



/*function requireAuth(to, from, next) {
  if (!auth.isAuthenticated()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}*/

export default new VueRouter({
  base: __dirname,
  routes: [
    { path: '/', name: "HelloWorld", component: HelloWorld },
    /*{ path: '/hello/:name', component: HelloFromParams },*/
    { path: '/todo', name: "Todo", component: TodoAppContainer }
    /*{ path: '/messages', component: MessagesContainer },
    { path: '/message/:id', component: MessageContainer },
    { path: '/login', component: LoginContainer },*/
  ]
})

