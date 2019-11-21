<template>
  <div>
    <h2>
      <a href="https://www.google.com/" target="_blank" @click="clickOnGoogle"
        >Google</a
      >
    </h2>
    <h2>
      <a href="https://www.google.com/" target="_blank" @click.prevent=""
        >Google</a
      >
    </h2>
    <h2 @mousemove="handleMouseMove">
      X: {{ x }} \ Y: {{ y }}
      <span @mousemove.stop="">Не изменять</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: "event-modifier",
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    clickOnGoogle(ev) {
      ev.preventDefault()
    },
    handleMouseMove(ev) {
      this.x = ev.clientX
      this.y = ev.clientY
    }
  }
}
</script>

<style scoped></style>
