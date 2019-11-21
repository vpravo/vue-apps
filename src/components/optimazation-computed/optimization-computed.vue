<template>
  <div>
    <h2>Counter: {{ counter }} \ {{ counter2 }}</h2>
    <h3>{{ result() }}</h3>
    <button @click="add">Add</button>
    <button @click="sub">Sub</button>
    <button @click="counter2++">Add counter2</button>
  </div>
</template>
<script>
export default {
  name: "OptimizationComputed",
  data() {
    return {
      counter: 0,
      counter2: 0,
      condition: ""
    }
  },
  methods: {
    add() {
      this.counter++
      //this.condition = this.counter > 3 ? 'More than 3' : 'Less than 3'
      this.result()
    },
    sub() {
      this.counter--
      //this.condition = this.counter > 3 ? 'More than 3' : 'Less than 3'
      this.result()
    },
    result() {
      console.log("result called")
      return (this.condition = this.counter > 3 ? "More than 3" : "Less than 3")
    },
    computed: {}
  }
}
</script>
<style lang="sass" scoped></style>
