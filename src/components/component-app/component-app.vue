<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <app-counter :counter="counter"></app-counter>
    <app-car
      :carName="carName"
      :carYear="carYear"
      :counter="counter"
      :changeFunc="changeNametoAudi"
      @nameChanged="carName = $event"
      @updateCounter="counter = $event"
    >
      <h2>{{ carName }} Mazda + html через slot</h2>
      <p slot="nameSlot">В именованнный slot</p>
    </app-car>
  </div>
</template>

<script>
import Car from "./car"
import Counter from "./counter"
export default {
  name: "ComponentApp",
  data() {
    return {
      carName: "Ford",
      carYear: 2019,
      counter: 0
    }
  },
  methods: {
    changeNametoAudi() {
      this.carName = "Audi"
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style lang="sass" scoped>
h2
    color: red
</style>
