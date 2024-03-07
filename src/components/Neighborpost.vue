<template>
  <div class="d-flex justify-content-between align-items-center my-4 px-4">
    <h4 class="fw-bold">이웃새글</h4>
    <div class="d-flex align-items-center gap-1">
      <i class="bi bi-search fs-5"></i>
      <i class="bi bi-justify fs-3"></i>
    </div>
  </div>

  <div v-for="(otherpost, i) in otherpost.filter((c) => c.following === 1)" :key="i" class="border-bottom mx-4 py-3" >
    <div class="d-flex justify-content-between">
      <div class="d-flex gap-2">
        <div class="overflow-hidden border rounded-circle profilebox pr-3">
          <img :src="otherpost.userimage"/>
        </div>
        <p class="fs-6">
          {{ otherpost.user }}<br>
          <span class="fs-6 text-secondary">{{ otherpost.date }}</span>
        </p>
      </div>
      <i class="bi bi-three-dots-vertical fs-5"></i>
    </div>

    <div class="overflow-hidden border rounded w-100 mb-3" style="height: 300px">
      <img :src="otherpost.image" class="w-100 h-100 object-fit-cover"/>
    </div>
    
    <div>
      <h5 class="fw-bold mb-2">{{ otherpost.title }}</h5>
      <p class="fs-6 text-secondary">{{ otherpost.title }}</p>

      <div class="d-flex justify-content-between fs-6">
        <div class="d-flex gap-1 text-secondary">
          <i class="bi bi-heart text-danger"></i>
          <p style="margin-right: 10px">{{ otherpost.likenum }}</p>
          <i class="bi bi-chat-dots"></i>
          <p>{{ otherpost.commentnum }}</p>
        </div>
        <i class="bi bi-box-arrow-up fs-5"></i>
      </div>
    </div>
  </div>

  <div class="m-box"></div>
</template>

<script>

export default {
  name: "NeighborpostVue",
  props: {
    otherpost : Array,
  },
  
};
</script>

<style>

</style>