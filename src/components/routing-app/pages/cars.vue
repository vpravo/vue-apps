<template>
  <div>
    <h1>Cars</h1>
    <router-link
      tag="li"
      v-for="(car, i) in 5"
      :key="i"
      :to="'/routing-app/car/' + car"
    >
      <a>Car {{ car }}</a>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped></style>
