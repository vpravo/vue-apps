<template>
  <div>
    <button class="on" :class="{ active: value }" @click="onChange(true)">
      On
    </button>
    <button class="off" :class="{ active: !value }" @click="onChange(false)">
      Off
    </button>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      enabled: false
    }
  },
  methods: {
    onChange(newValue) {
      this.$emit("input", newValue)
    }
  }
}
</script>

<style lang="sass" scoped>
.on.active
  background: green

.off.active
  background: red
</style>
