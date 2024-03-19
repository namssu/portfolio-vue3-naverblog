<template>
  <div class="mypostbg">
    <div class="text-center pt-5">
      <p>오늘 3 • 전체 1,056</p>
      <h5 class="fw-bold">남쑤의 블로그</h5>
    </div>
  </div>

  <div class="text-center position-relative pt-5">
    <div
      class="overflow-hidden border rounded-circle profilebox position-absolute top-0 start-50 translate-middle"
    >
      <img
        src="https://cdn.pixabay.com/photo/2019/05/28/05/47/puppy-4234435_1280.jpg"
        class="w-100 h-100 object-fit-cover"
      />
    </div>
    <h6 class="fw-bold">남쑤</h6>
    <p class="fs-6 text-secondary">일상 • 2명의 이웃</p>
  </div>

  <div
    class="my-4 px-4 py-3"
    style="border-top: 7px solid #efefef; border-bottom: 5px solid #eee"
  >
    <h6 class="fw-bold mb-4">인기글</h6>
    <div class="d-flex">
      <div v-for="(mypost, j) in mypost.filter((a) => a.readnum >= 50)" :key="j" style="margin-right: 15px;">
        <div class="overflow-hidden border rounded otherpostimg mb-3">
          <img
            :src="mypost.image"
            class="w-100 h-100 object-fit-cover"
          />
        </div>
        <h6 class="fw-bold">{{ mypost.title }}</h6>
      </div>
    </div>
  </div>

  <div class="mx-4">
    <h6 class="fw-bold mb-2">전체글</h6>

    <div
      v-for="(mypost, i) in mypost"
      :key="i"
      class="border-bottom py-3"
    >
      <div class="d-flex justify-content-between">
        <p class="fs-6 text-secondary">{{ mypost.date }}</p>
        <p class="fs-6 text-secondary">{{ mypost.readnum }} 읽음</p>
      </div>

      <div class="overflow-hidden border rounded w-100 mb-3" style="height: 300px">
        <img :src="mypost.image" class="w-100 h-100 object-fit-cover" />
      </div>

      <div>
        <h5 class="fw-bold mb-2">{{ mypost.title }}</h5>
        <p class="fs-6 text-secondary">{{ mypost.subtitle }}</p>

        <div class="d-flex justify-content-between fs-5">
          <div class="d-flex gap-1 text-secondary">
            <i @click="$store.commit('likemypost', mypost.id)"  :class="[mypost.liked == 1 ? 'bi-heart-fill' : 'bi-heart']" class="text-danger"></i>
            <p style="margin-right: 10px;">{{ mypost.likenum }}</p>
            <i class="bi bi-chat-dots"></i>
            <p>{{ mypost.commentnum }}</p>
          </div>
          <i class="bi bi-box-arrow-up"></i>
        </div>
      </div>
    </div>
  </div>

  <div class="m-box"></div>
</template>

<script>
export default {
  name: "MypostVue",
  props: {
    mypost: Array,
  },
};
</script>

<style>
.mypostbg {
  background: #dfdfef;
  height: 200px;
}
.profilebox {
  width: 55px;
  height: 55px;
}
</style>