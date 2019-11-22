<template>
  <div>
    <h2>{{ title }}</h2>
    <button @click="title = 'Change Title'">Change title</button>
    <button @click="doDestroy">doDestroy</button>
  </div>
</template>

<script>
export default {
  name: "LifecycleComponent",
  data() {
    return {
      title: "Hello"
    }
  },
  methods: {
    doDestroy() {
      this.$destroy()
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  update() {
    console.log("update")
  },
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  destroyed() {
    console.log("destroyed")
  }
}
</script>

<style></style>
