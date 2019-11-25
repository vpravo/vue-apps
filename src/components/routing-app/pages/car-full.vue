<template>
  <div>
    <h4>Car name: {{ $route.query["name"] }}</h4>
    <h5>Car year: {{ year }}</h5>
    <div class="scroll"></div>
    <h6 id="scroll">Hello from bottom</h6>
    <h6 class="scroll"></h6>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return this.$route.query.year
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouterEnter")
    next()
  }
}
</script>

<style lang="sass" scoped>
.scroll
    width: 100px
    height: 1000px
    background: #ccc
</style>
