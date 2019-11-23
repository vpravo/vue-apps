<template>
  <div>
    <h2>List</h2>
    <input type="text" v-model="searchName" />
    <ul>
      <li v-for="(item, index) of filtredNames" :key="index">
        {{ item }}
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
import listMixin from "./list-mixin"
export default {
  mixins: [listMixin]
}
</script>

<style lang="sass" scoped></style>
