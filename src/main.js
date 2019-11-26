import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import colorDirectives from "./components/directives/color"
import ListApp from "./components/filter-mixin/list-app"
import Vuelidate from "vuelidate"
import VueResource from "vue-resource"

Vue.use(VueResource)
Vue.http.options.root = "http://localhost:3000/"
Vue.http.interceptors.push(request => {
  request.headers.set("Auth", "random token " + Math.random())
})
Vue.use(Vuelidate)
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
