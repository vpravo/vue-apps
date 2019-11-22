<template>
  <div>
    <h2 v-colored v-if="visible">{{ title }}</h2>
    <h2 v-colored:background.font="'red'">{{ title }}</h2>
    <h2 v-colored:color.delay="'blue'">{{ title }}</h2>
    <button @click="visible = !visible">Toggle</button>
    <button @click="title = 'NewTitle'">NewTitle</button>
    <hr />
    <h2 v-font>Local directive</h2>
  </div>
</template>

<script>
export default {
  name: "DirectiveApp",
  data() {
    return {
      title: "Hello",
      visible: true
    }
  },
  directives: {
    font: {
      bind(el /*, bindings /*,vnode*/) {
        el.style.fontSize = "70px"
      }
    }
  }
}
</script>

<style></style>
