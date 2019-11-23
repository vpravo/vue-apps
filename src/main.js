import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import colorDirectives from "./components/directives/color"
import ListApp from "./components/filter-mixin/list-app"
Vue.component("app-list", ListApp)
Vue.directive("colored", colorDirectives)
Vue.filter("uppercase", val => {
  return val.toUpperCase()
})
Vue.component("")
Vue.config.productionTip = false
export const eventEmitter = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
