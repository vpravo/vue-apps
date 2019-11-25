<template>
  <div>
    <h1>Car id {{ id }}</h1>
    <button class="btn btn-sm btn-defalt mb-2" @click="goBackToCars">
      Back
    </button>
    <br />
    <router-link
      tag="button"
      class="btn btn-info mt-2"
      :to="{
        name: 'carFull',
        params: { id },
        query: { name: 'Mazda', year: 2012 },
        hash: '#scroll'
      }"
      >Full info</router-link
    >
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //id: this.$router.currentRoute.params['id']
      //либо так, что одно и тоже:
      id: this.$route.params["id"]
    }
  },
  methods: {
    goBackToCars() {
      this.$router.push("/routing-app/cars")
    }
  },
  watch: {
    $route(to /*, from*/) {
      this.id = to.params["id"]
    }
  }
}
</script>

<style></style>
