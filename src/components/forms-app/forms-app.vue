<template>
  <div>
    <h2>Forms input</h2>
    <input type="text" v-model.lazy="name" />
    <p>{{ name }}</p>
    <br />
    <textarea v-model="textarea"></textarea>
    <p>{{ textarea }}</p>
    <hr />
    <label>
      <input type="checkbox" value="instagram" v-model="social" /> Instagram
    </label>
    <label> <input type="checkbox" value="vk" v-model="social" /> VK </label>
    <label>
      <input type="checkbox" value="Facebook" v-model="social" /> Facebook
    </label>
    <ul>
      <li v-for="(s, i) in social" :key="i">{{ s }}</li>
    </ul>
    <hr />
    <label>
      <input type="radio" value="instagram" v-model="socialRadio" /> Instagram
    </label>
    <label> <input type="radio" value="vk" v-model="socialRadio" /> VK </label>
    <label>
      <input type="radio" value="Facebook" v-model="socialRadio" /> Facebook
    </label>
    <p>{{ socialRadio }}</p>
    <hr />
    <select>
      <option
        v-for="(s, i) in socialList"
        :key="i"
        :selected="s === 'defaultSocial'"
        >{{ s }}</option
      >
    </select>
    <hr />
    <h3>Select v-model</h3>
    <select v-model="socialModel">
      <option v-for="(s, i) in socialList" :key="i">{{ s }}</option>
    </select>
    <p>{{ socialModel }}</p>
    <hr />
    <input type="text" v-model.number="age" />
    <p>{{ age }}</p>
    <hr />
    <app-on-off v-model="switched"></app-on-off>
    <div>
      <h3 v-if="switched">Component is enabled</h3>
      <h3 v-else>Component is disabled</h3>
    </div>
  </div>
</template>

<script>
import OnOff from "./OnOff"
export default {
  data() {
    return {
      name: "",
      textarea: "",
      social: ["vk "],
      socialRadio: "instagram",
      socialList: ["Instagram", "VK", "Facebook"],
      defaultSocial: "Instagram",
      socialModel: "Facebook",
      age: 20,
      switched: false
    }
  },
  components: {
    appOnOff: OnOff
  },
  watch: {
    age(val) {
      console.log(typeof val)
    }
  }
}
</script>

<style lang="sass" scoped>
textarea
    height: 100px
    width: 400px
p
    white-space: pre
</style>
