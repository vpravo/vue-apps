<template>
  <div>
    <ul>
      <router-link
        tag="li"
        v-for="(item, i) of contents"
        :key="i"
        :to="{ name: `${item.path}` }"
      >
        {{ item.name }}
      </router-link>
    </ul>
  </div>
</template>

<script>
import index from "./contents"
export default {
  name: "Contents",
  data() {
    return {
      contents: index
    }
  }
}
</script>

<style scoped></style>
