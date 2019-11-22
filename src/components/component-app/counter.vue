<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <h1>CounterEventEmitter: {{ event_emitter_counter }}</h1>
  </div>
</template>

<script>
import { eventEmitter } from "../../main.js"
export default {
  props: ["counter"],
  data() {
    return {
      event_emitter_counter: 0
    }
  },
  created() {
    eventEmitter.$on("updateCounterEventEmitter", num => {
      this.event_emitter_counter += num
    })
  }
}
</script>

<style></style>
