<template>
  <h2>Second Counter: {{ counter }}</h2>
</template>

<script>
export default {
  //counter будем брать из store
  //props: ['counter']
  computed: {
    counter() {
      return this.$store.getters["secondCounter/computedCounter"]
    }
  }
}
</script>

<style lang="sass" scoped></style>
