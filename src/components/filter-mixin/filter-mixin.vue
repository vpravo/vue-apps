<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ title | lowercase }}</h2>
    <h2>{{ title | uppercase }}</h2>
    <input type="text" v-model="searchName" />
    <ul>
      <li v-for="(item, index) of filtredNames" :key="index">
        {{ item }}
      </li>
    </ul>
    <hr />
    <app-list></app-list>
  </div>
</template>

<script>
export default {
  name: "FliterMixin",
  data() {
    return {
      title: "Hello",
      names: ["Alex", "Felix", "Makar", "Bob"],
      searchName: ""
    }
  },
  computed: {
    filtredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  },
  filters: {
    lowercase(val) {
      return val.toLowerCase()
    }
  }
}
</script>

<style lang="sass" scoped></style>
