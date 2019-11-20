import Vue from "vue"
import VueRouter from "vue-router"
import Contents from "../components/Contents"
import DynamicAttributes from "../components/dynamic-attributes"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Contents
  },
  {
    path: "/dynamic-attributes",
    name: "dynamic-attributes",
    component: DynamicAttributes
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
