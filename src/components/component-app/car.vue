<template>
  <div class="car">
    <h3>Name: {{ carName }} \ {{ reversName }}</h3>
    <p>Year: {{ carYear }}</p>
    <button @click="changeName">Change name</button>
    <button @click="changeFunc">Change name from Parent</button>
    <button @click="updateCounter">Update counter</button>
    <button @click="updateCounterEventEmitter">
      updateCounterEventEmitter
    </button>
    <slot></slot>
    <slot name="nameSlot"></slot>
  </div>
</template>

<script>
import { eventEmitter } from "../../main.js"
export default {
  name: "Car",
  //props: ['carName', 'carYear', 'carNameMazda'],
  props: {
    carName: {
      type: String,
      default: "Audi"
    },
    carYear: {
      type: Number
    },
    changeFunc: {
      type: Function
    },
    counter: {
      type: Number
    }
  },
  data() {
    return {
      carNamelocal: "Mazda",
      counterLocal: 0
    }
  },
  methods: {
    changeName() {
      this.$emit("nameChanged", this.carNamelocal)
    },
    updateCounter() {
      this.$emit("updateCounter", this.counterLocal++)
    },
    updateCounterEventEmitter() {
      eventEmitter.$emit("updateCounterEventEmitter", 3)
    }
  },
  computed: {
    reversName() {
      return this.carName
        .split("")
        .reverse()
        .join("")
    }
  }
}
</script>

<style lang="sass" scoped>
.car
  border: 1px solid black
h2
  color: blue
</style>
