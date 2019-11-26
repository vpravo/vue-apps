<template>
  <div>
    <button type="button" class="btn btn-success" @click="updateCounter(1)">
      Add
    </button>
    <button type="button" class="btn btn-danger" @click="updateCounter(-1)">
      Subtract
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    updateCounter(val) {
      //1. так как значение counter берем из store (п.2) отсутствует необходимость эмитить
      //событие "counterUpdate"
      //this.$emit("counterUpdate", val)

      //2. Изменять store следует через mutations
      //this.$store.state.counter += val

      //3. mutations через commit, в параметре которого имя того mutation который определен в store
      //this.$store.commit("changeCounter", val)

      //4. Изменяем counter через actions store
      this.$store.dispatch("asyncChangeCounter", {
        counterVal: val,
        timeoutDelay: 1000
      })

      this.$store.dispatch("secondCounter/asyncChangeCounter", {
        counterVal: val,
        timeoutDelay: 0
      })
    }
  }
}
</script>

<style lang="sass" scoped></style>
