import Vue from "vue"
import VueRouter from "vue-router"
import AppContents from "../components/app-contents"
import DynamicAttributes from "../components/dynamic-attributes"
import PresentationHtml from "../components/presentation-html"
import HandleEvents from "../components/handle-events"
import PassParameter from "../components/pass-parameter"
import EventModifier from "../components/event-modifier"
import ModelInput from "../components/model-input"
import HandleCssClass from "../components/handle-css-class"
import HandleInlineStyle from "../components/handle-inline-style"
import HandleVisible from "../components/handle-visible"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: AppContents
  },
  {
    path: "/dynamic-attributes",
    name: "dynamic-attributes",
    component: DynamicAttributes
  },
  {
    path: "/presentation-html",
    name: "presentation-html",
    component: PresentationHtml
  },
  {
    path: "/handle-events",
    name: "handle-events",
    component: HandleEvents
  },
  {
    path: "/pass-parameter",
    name: "pass-parameter",
    component: PassParameter
  },
  {
    path: "/event-modifier",
    name: "event-modifier",
    component: EventModifier
  },
  {
    path: "/model-input",
    name: "model-input",
    component: ModelInput
  },
  {
    path: "/handle-css-class",
    name: "handle-css-class",
    component: HandleCssClass
  },
  {
    path: "/handle-inline-style",
    name: "handle-inline-style",
    component: HandleInlineStyle
  },
  {
    path: "/handle-visible",
    name: "handle-visible",
    component: HandleVisible
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
