<template>
  <div class="d-flex justify-content-between align-items-center my-4 px-4" >
    <h4 class="fw-bold">내소식</h4>
    <div class="d-flex align-items-center gap-1">
      <i class="bi bi-search fs-5"></i>
      <i class="bi bi-justify fs-3"></i>
    </div>
  </div>

  <div
    class="d-flex justify-content-between border-bottom mx-4 py-3"
  >
    <div class="text-center mr-5" style="width:55px;">
      <i class="bi bi-heart text-danger fs-5"></i>
      <p class="fs-7">공감</p>
    </div>
    <div class="w-100 pt-1">
      <p>제인님이 <b>공릉역 카페 추천 글</b>에 공감합니다.<br>
        <span class="fs-7 text-secondary">1시간 전</span></p>
    </div>
    <i class="bi bi-x-lg"></i>
  </div>

  <div class="m-box"></div>
</template>

<script>
export default {
  name: 'MynotificationVue'
}
</script>

<style>
.fs-7 {
  font-size: 12px;
}
</style>