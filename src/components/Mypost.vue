<template>
  <div class="mypostbg">
    <div class="text-center text-white pt-5">
      <p>오늘 3 • 전체 1,056</p>
      <h5 class="fw-bold">남쑤의 블로그</h5>
    </div>
  </div>

  <div class="text-center position-relative pt-5">
    <div class="overflow-hidden border rounded-circle profilebox position-absolute top-0 start-50 translate-middle">
      <img
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" class="w-100 h-100 object-fit-cover"
      />
    </div>
    <h6 class="fw-bold">남쑤</h6>
    <p class="fs-6 text-secondary">일상 • 2명의 이웃</p>
  </div>

  <div class="my-4 px-4 py-3" style="border-top: 7px solid #efefef; border-bottom: 5px solid #eee">
    <h6 class="fw-bold mb-4">인기글</h6>
    <div class="d-flex">
      <div>
        <div class="overflow-hidden border rounded otherpostimg mb-2">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" class="w-100 h-100 object-fit-cover"
          />
        </div>
        <h6 class="fw-b">공릉맛집</h6>
      </div>
    </div>
  </div>

  <div class="mx-4">
    <h6 class="fw-bold mb-4">전체글</h6>
    <div v-for="(mypost, i) in mypost" :key="i" class="d-flex justify-content-between border-bottom py-3">
      <div>
        <h5 class="fw-bold mb-2">{{ mypost.title  }}</h5>
        <p class="fs-6 text-secondary">{{ mypost.subtitle }}</p>
        <p class="fs-6 text-secondary">{{ mypost.date }}</p>
        <div class="d-flex gap-1 fs-6 text-secondary">
          <i class="bi bi-heart"></i>
          <p>{{ mypost.likenum }}</p>
          <i class="bi bi-chat-dots"></i>
          <p>{{ mypost.commentnum }}</p>
        </div>
      </div>

      <div class="overflow-hidden border rounded otherpostimg">
        <img
          :src="mypost.image"
          class="w-100 h-100 object-fit-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MypostVue",
  props: {
    mypost : Array,
  }
};
</script>

<style>
.mypostbg {
  background: skyblue;
  height: 200px;
}
.profilebox {
  width: 55px;
  height: 55px;
}
</style>