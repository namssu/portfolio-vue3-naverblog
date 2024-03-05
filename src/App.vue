<template>

  <Neighborpost v-if="step == 1" :otherpost = "otherpost"/>
  
  <Writepost :step="step" @closeTab="step = 1"/>

  <Container v-if="step == 2" :otherpost="otherpost"/>

  <Mynotification v-if="step == 4"/>

  <Mypost v-if="step == 5" :mypost="mypost" />

  <nav v-if="step !== 3" class="d-flex justify-content-around align-items-center py-2 fs-5">
    <i @click="step = 1" class="bi bi-view-list"></i>
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
import Neighborpost from "./components/Neighborpost.vue"


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
    Neighborpost: Neighborpost,
    Writepost: Writepost,
    Mypost: Mypost,
    Mynotification: Mynotification,
  },
}
</script>

<style>
@import "bootstrap-icons/font/bootstrap-icons.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}
/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
::-webkit-scrollbar {
  display: none;
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

.m-box {
  height: 46px;
  width: 100%;
}
</style>
