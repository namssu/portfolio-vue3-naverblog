<template>
  <div v-if="step == 3" class="w-100 h-100">
    <div class="d-flex justify-content-between align-items-center my-3 px-4 pb-2 border-bottom position-absolute top-0 start-0 w-100">
      <button @click="$emit('closeTab')" class="btn">취소</button>
      <select class="border-0">
        <option>맛집</option>
        <option>카페</option>
      </select>
      <button @click="$emit('addPost')" class="btn">등록</button>
    </div>

    <div class="px-4 h-100 d-flex flex-column" style="margin-top:80px;">
      <input @input="$emit('newTitle', $event.target.value)" type="text" placeholder="제목" class="border-bottom py-3 fs-2 w-100 border-0" style="height: 80px"/>
      <textarea @input="$emit('newContent', $event.target.value)" class="w-100 border-0 mb-3" style="height: 400px; resize: none;"> </textarea>
      <input @input="uploadImg" type="file" id="file" class="d-none" >
      <label for="file" class="border input-plus">+</label>
    </div>

    <div class="d-flex gap-2 py-2 px-4 fs-3 border-top position-absolute bottom-0 start-0 w-100" style=" background: #fff; height:40px;">
      <i class="bi bi-justify-left"></i>
      <i class="bi bi-type-bold"></i>
      <i class="bi bi-type-italic"></i>
      <i class="bi bi-type-underline"></i>
    </div>
  </div>
</template>

<script>
export default {
  name : 'WritepostVue',
  props : {
    step : Number,
  },
  methods : {
    uploadImg(e) {
      let newFiles = e.target.files;
      let newUrl = URL.createObjectURL(newFiles[0]);
      this.$emit('newImage', newUrl);
    }
  }
}
</script>

<style>
.input-plus {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}

</style>