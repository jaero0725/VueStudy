<template>
    <div>
        <img :src="oneroom.image" class="room-img">
        <h4>{{oneroom.title}}</h4>
        <!-- <h4 @click="isModalOpen = true; clickIndex = i">{{oneroom.title}}</h4> -->
        <p>{{oneroom.price}}원</p>
    </div>
</template>

<script>
export default{
    name : "TheCard",
    props:{
        oneroom :  Object //데이터 형식
    }
}
</script>
<style>
.room-img{
  width:100%;
  margin-top:40px;
}
</style>