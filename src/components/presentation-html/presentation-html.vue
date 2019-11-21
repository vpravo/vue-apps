<template>
  <div>
    <h2>{{ link }}</h2>
    <h2 v-html="link"></h2>
  </div>
</template>

<script>
export default {
  name: "presentation-html",
  data() {
    return {
      link: '<a href="https://www.google.com/">Сырой HTML</a>'
    }
  }
}
</script>

<style scoped></style>
