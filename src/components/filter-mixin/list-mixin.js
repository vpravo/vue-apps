export default {
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
  }
}
