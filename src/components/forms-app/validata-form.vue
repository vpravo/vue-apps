<template>
  <div class="container">
    <form action="" id="form" class="pt-3" @submit.prevent="OnSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          class="form-control"
          :class="{ 'is-invalid': $v.email.$error }"
          v-model="email"
          @blur="$v.email.$touch()"
        />
        <div class="invalid-feedback" v-if="!$v.email.required">
          Email is required
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
          Shoold be an Email
        </div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">
          Email is used
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{ 'is-invalid': $v.password.$error }"
          v-model="password"
          @blur="$v.password.$touch()"
        />
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min length of password {{ $v.password.$params.minLength.min }}. Now is
          {{ password.length }}
        </div>
      </div>
      <div class="form-group">
        <label for="confirm">Confirm password</label>
        <input
          type="password"
          id="confirm"
          class="form-control"
          :class="{ 'is-invalid': $v.confirm.$error }"
          v-model="confirm"
          @blur="$v.confirm.$touch()"
        />
        <div class="invalid-feedback" v-if="!$v.confirm.sameAs">
          Password should match
        </div>
      </div>
    </form>
    <button
      class="btn btn-success"
      type="submit"
      :disabled="$v.$invalid"
      form="form"
    >
      Submit
    </button>
    <pre>{{ $v }}</pre>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators"
export default {
  data() {
    return {
      email: "",
      password: "",
      confirm: ""
    }
  },
  methods: {
    OnSubmit() {
      console.log("email: " + this.email)
      console.log("password: " + this.password)
    }
  },
  validations: {
    email: {
      required,
      email,
      uniqEmail: function(newEmail) {
        if (newEmail === "") return true
        return new Promise(resolve => {
          setTimeout(() => {
            const value = newEmail !== "test@mail.ru"
            resolve(value)
          }, 1000)
        })
      }
    },
    password: {
      minLength: minLength(6)
    },
    confirm: {
      sameAs: sameAs(vue => {
        return vue.password
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.container
    padding-bottom: 500px
</style>
