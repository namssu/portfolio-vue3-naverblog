<template>
  
  <Writepost :step="step" />

  <Container v-if="step == 2" :otherpost="otherpost"/>

  <Mynotification/>

  <Mypost v-if="step == 5" :mypost="mypost" />

  <nav v-if="step !== 3" class="d-flex justify-content-around align-items-center py-2 fs-5">
    <i class="bi bi-view-list"></i>
    <i @click="step = 2" class="bi bi-compass"></i>
    <i @click="step = 3" class="bi bi-pencil" ></i>
    <i @click="step = 4" class="bi bi-bell"></i>
    <i @click="step = 5" class="bi bi-person"></i>
  </nav>

</template>

<script>
import otherpost from "./data/otherpost.js"
import mypost from "./data/mypost.js"

import Container from "./components/Container.vue"
import Writepost from "./components/Writepost.vue"
import Mypost from "./components/Mypost.vue"
import Mynotification from "./components/Mynotification.vue"


export default {
  name: "App",
  data() {
    return {
      otherpost: otherpost,
      mypost: mypost,
      step : 2,
    };
  },
  components: {
    Container: Container,
    Writepost: Writepost,
    Mypost: Mypost,
    Mynotification: Mynotification,
  },
};
</script>

<style>
@import "bootstrap-icons/font/bootstrap-icons.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: 1px solid r
}

nav {
  
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 -50px 30px 30px rgba(0, 0, 0, 0.01);
  display: none;
}

nav i {
  padding: 0 10px;
  cursor: pointer;
}

.otherpostimg {
  width: 150px;
  height: 150px;
}
</style>
