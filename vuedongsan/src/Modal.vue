<template>
  <!-- 모달창 -->
  <div class="black-bg" v-if="isModalOpen">
    <div class="white-bg">
      <img :src="onerooms[clickIndex].image" class="room-img">
      <h4>{{ onerooms[clickIndex].title }}</h4>
      <p> {{ onerooms[clickIndex].content }} </p>
      <p> 가격 : {{ onerooms[clickIndex].price }}원 </p>
      <button @click="isModalOpen=false">닫기</button>
    </div>
  </div>
</template>

<script>
export default{
    name : "TheModal"
}
</script>

<style>
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
</style>