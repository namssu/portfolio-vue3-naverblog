<template>

  <Container :otherpost="otherpost"/>

  <nav class="d-flex justify-content-around align-items-center py-2 fs-5">
    <i class="bi bi-view-list"></i>
    <i class="bi bi-compass"></i>
    <i class="bi bi-pencil"></i>
    <i class="bi bi-bell"></i>
    <i class="bi bi-person"></i>
  </nav>

</template>

<script>
import otherpost from "./data/otherpost.js";
import Container from "./components/Container.vue"

export default {
  name: "App",
  
  data() {
    return {
      otherpost: otherpost,
    };
  },

  components : {
    Container : Container,
  }

};
</script>

<style>
@import "bootstrap-icons/font/bootstrap-icons.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 30px;
}

nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 -50px 30px 30px rgba(0, 0, 0, 0.01);
}

.otherpostimg {
  width: 150px;
  height: 150px;
}
</style>
