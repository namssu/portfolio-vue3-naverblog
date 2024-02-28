<template>
  <div class="d-flex justify-content-between align-items-center my-4 px-4" >
    <h4 class="fw-bold">추천</h4>
    <div class="d-flex align-items-center gap-1">
      <i class="bi bi-search fs-5"></i>
      <i class="bi bi-justify fs-3"></i>
    </div>
  </div>

  <div
    v-for="(otherpost, i) in otherpost"
    :key="i"
    class="d-flex justify-content-between border-bottom mx-4 py-3"
  >
    <div>
      <h5 class="fw-bold mb-3">{{ otherpost.title }}</h5>
      <p class="fs-6 text-secondary">
        {{ otherpost.user }} • {{ otherpost.date }}
      </p>
      <div class="d-flex gap-1 fs-6 text-secondary">
        <i class="bi bi-heart"></i>
        <p>{{ otherpost.likenum }}</p>
        <i class="bi bi-chat-dots"></i>
        <p>{{ otherpost.commentnum }}</p>
      </div>
    </div>

    <div class="overflow-hidden border rounded otherpostimg">
      <img :src="otherpost.image" class="w-100 h-100 object-fit-cover" />
    </div>
  </div>
</template>

<script>
export default {
  name : 'ContainerVue',
  props : {
    otherpost : Array,
  }
}
</script>

<style>

</style>