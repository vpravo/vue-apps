<template>
  <div>
    <ul>
      <li v-for="(item, i) of people" :key="i">{{ ++i }} {{ item }}</li>
    </ul>
    <hr />
    <ol>
      <li v-for="n in 10" :key="n">{{ n }}</li>
    </ol>
    <hr />
    <ul>
      <li v-for="(value, key, i) in person" :key="i">
        {{ ++i }}. <b>{{ key }}</b
        >: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "handle-lists",
  data() {
    return {
      people: ["Alex", "Felix", "Abdel", "Vlad"],
      person: {
        name: "Russel",
        age: 42,
        job: "frontend"
      }
    }
  }
}
</script>

<style scoped></style>
