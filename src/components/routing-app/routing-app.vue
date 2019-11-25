<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link
            tag="li"
            class="nav-item"
            exact
            to="/routing-app"
            active-class="active"
          >
            <a class="nav-link">Home</a>
          </router-link>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/routing-app/cars"
              active-class="active"
              >Cars</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/routing-app/car/3"
              active-class="active"
              >Car 3</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/routing-app/car/4"
              active-class="active"
              >Car 4</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped></style>
