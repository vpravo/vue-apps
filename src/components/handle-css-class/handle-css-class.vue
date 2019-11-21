<template>
  <div>
    <div
      class="circle"
      @click="isActive = !isActive"
      :class="{ red: isActive, green: !isActive }"
    ></div>
    <hr />
    <div class="circle" :class="color"></div>
    <input type="text" v-model="color" />
    <hr />
    <div class="circle" :class="[color2, { red: isActive }]"></div>
    <input type="text" v-model="color2" />
    <hr />
    <div
      class="circle"
      @click="isActive = !isActive"
      :class="getCssClasses()"
    ></div>
    <div
      class="circle"
      @click="isActive = !isActive"
      :class="getCssClassesComputed"
    ></div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "HandleCssClass",
  data() {
    return {
      color: "",
      color2: "blue",
      isActive: false
    }
  },
  computed: {
    getCssClassesComputed() {
      return {
        red: this.isActive,
        green: !this.isActive
      }
    }
  },
  methods: {
    //ухудшает проихводительность, лучше перенести его в свойство computed
    getCssClasses() {
      return {
        red: this.isActive,
        green: !this.isActive
      }
    }
  }
}
</script>

<style scoped lang="sass">
.circle
  width: 100px
  height: 100px
  border-radius: 50%
  border: 1px solid black
  display: inline-block
  margin: 40px
.red
  background: red
.blue
  background: blue
.green
  background: green
</style>
