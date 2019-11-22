<template>
  <div>
    <h2 ref="heading">{{ title }}</h2>
    <button @click="updateFirstTitle">Update title</button>
    h2
  </div>
</template>
<script>
export default {
  name: "DomElement",
  data() {
    return {
      title: "Hello, I am Vue!"
    }
  },
  methods: {
    updateFirstTitle() {
      this.title = "New title!"
      this.$refs.heading.style.color = "red"
      console.log(this.$refs)
    }
  }
}
</script>
<style lang="sass" scoped></style>
