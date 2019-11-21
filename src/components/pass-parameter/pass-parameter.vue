<template>
  <div>
    <h2>{{ title }} = {{ counter }}</h2>
    <button @click="riseCounter(5, 'Изменено на 5', $event)">
      Увеличить на 5
    </button>
    <button @click="riseCounter(10, 'Изменено на 10', $event)">
      Увеличить на 10
    </button>
  </div>
</template>

<script>
export default {
  name: "pass-parameter",
  data() {
    return {
      counter: 0,
      title: "Счетчик"
    }
  },
  methods: {
    riseCounter(n, str, ev) {
      this.counter += n
      this.title = str
      if (n === 5) {
        ev.target.style.color = "blue"
      }
      if (n === 10) {
        ev.target.style.color = "red"
      }
    }
  }
}
</script>

<style scoped></style>
