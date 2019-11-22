import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import colorDirectives from "./components/directives/color"
Vue.directive("colored", colorDirectives)
Vue.config.productionTip = false
export const eventEmitter = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
