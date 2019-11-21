<template>
  <div>
    <h2 v-if="isVisible">I am visible!</h2>
    <h2 v-else>I am not visible!</h2>
    <button @click="isVisible = !isVisible">Toggle</button>
    <hr />
    <h2 v-if="type === 'a'">A</h2>
    <h2 v-else-if="type === 'b'">B</h2>
    <h2 v-else-if="type === 'c'">B</h2>
    <h2 v-else>not match</h2>
    <input type="text" v-model="type" />
    <hr />
    <template v-if="isVisible2">
      <h2>I am title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, illo!</p>
    </template>
    <template v-if="!isVisible2">
      <h2 style="color: red">I am title</h2>
      <p style="color: blue">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, illo!
      </p>
    </template>
    <button @click="isVisible2 = !isVisible2">Toggle</button>
    <hr />
    <h2 v-show="isVisible3">I am visible!</h2>
    <h2 v-show="!isVisible3">I am not visible!</h2>
    <button @click="isVisible3 = !isVisible3">Toggle</button>
  </div>
</template>

<script>
export default {
  name: "handle-visible",
  data() {
    return {
      isVisible: true,
      isVisible2: true,
      isVisible3: true,
      type: "a"
    }
  }
}
</script>

<style scoped></style>
