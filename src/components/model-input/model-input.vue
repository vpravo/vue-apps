<template>
  <div>
    <input
      type="text"
      @input="inputValue = $event.target.value"
      :value="inputValue"
    />
    <h2>{{ inputValue }}</h2>
    <hr />
    <input type="text" v-model.lazy="input" />
    <h2>{{ input }}</h2>
  </div>
</template>

<script>
export default {
  name: "shortcuts-directives",
  data() {
    return {
      inputValue: "Начальное значение",
      input: "Начальное значение"
    }
  }
}
</script>

<style scoped></style>
