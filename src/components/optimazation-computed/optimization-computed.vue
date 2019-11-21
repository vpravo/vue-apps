<template>
  <div>
    <h2>Counter: {{ counter }} \ {{ counter2 }}</h2>
    <h3>Result: {{ result() }}</h3>
    <h3>ComputedResult: {{ computedResult }}</h3>

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
      return this.counter > 3 ? "More than 3" : "Less than 3"
    }
  },
  computed: {
    computedResult() {
      console.log("computedResult called")
      return this.counter > 3 ? "More than 3" : "Less than 3"
    }
  }
}
</script>
<style lang="sass" scoped></style>
