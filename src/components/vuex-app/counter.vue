<template>
  <h2>Counter: {{ counter }}</h2>
</template>

<script>
export default {
  //counter будем брать из store
  //props: ['counter']
  computed: {
    counter() {
      return this.$store.state.counter
    }
  }
}
</script>

<style lang="sass" scoped></style>
