<template>
  <div>
    <h1>Динамические атрибуты</h1>
    <h2>
      <a :href="url">Google</a>
    </h2>
    <p><a :href="urlCode">Код</a></p>
  </div>
</template>

<script>
export default {
  name: "DynamicAttributes",
  data() {
    return {
      url: "https://www.google.com/",
      urlCode:
        "https://github.com/vpravo/vue-apps/blob/master/src/components/dynamic-attributes/dynamic-attributes.vue"
    }
  }
}
</script>

<style scoped></style>
