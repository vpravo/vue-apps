<template>
  <div>
    <h2>Счетчик = {{ counter }}</h2>
    <button @click="riseCounter">Увеличить</button>
    <hr />
    <h2 @mouseover="onHover">Счетчик2 = {{ counter2 }}</h2>
    <button @click="counter2++">Увеличить</button>
  </div>
</template>

<script>
export default {
  name: "handle-events",
  data() {
    return {
      counter: 0,
      counter2: 0
    }
  },
  methods: {
    riseCounter() {
      this.counter++
    },
    onHover(ev) {
      ev.target.style.color = "red"
    }
  }
}
</script>

<style scoped></style>
