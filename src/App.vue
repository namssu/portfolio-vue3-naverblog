<template>
<div class="d-flex justify-content-between align-items-center mb-4 px-4">
    <h4 class="fw-bold">추천</h4>
    <div class="d-flex align-items-center gap-1">
      <i class="bi bi-search fs-5"></i>
      <i class="bi bi-justify fs-3"></i>
    </div>
  </div>


  <div class="d-flex justify-content-between border-bottom mx-4 py-3">
    <div>
      <h5 class="fw-bold mb-3">맛집 탐방하기</h5>
      <p class="fs-6 text-secondary">보라 • 2024.02.25</p>
      <div class="d-flex gap-1 fs-6 text-secondary">
        <i class="bi bi-heart"></i>
        <p>1</p>
        <i class="bi bi-chat-dots"></i>
        <p>5</p>
      </div>
    </div>

    <div class="overflow-hidden  border rounded otherpostimg">
      <img src="https://cdn.imweb.me/thumbnail/20230522/31017371829ad.jpg" class="w-100 h-100 object-fit-cover">
    </div>
  </div>



  <nav class="d-flex justify-content-around align-items-center py-2 fs-5">
    <i class="bi bi-view-list"></i>
    <i class="bi bi-compass"></i>
    <i class="bi bi-pencil"></i>
    <i class="bi bi-bell"></i>
    <i class="bi bi-person"></i>
  </nav>
</template>

<script>


export default {
  name: 'App',

}
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
