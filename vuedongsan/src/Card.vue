<template>
    <div>
        <img :src="oneroom.image" class="room-img">
        <h4 @click="$emit('openModal', oneroom.id)">{{oneroom.title}}</h4> 
        <p>{{oneroom.price}}원</p>
    </div>
    <!--메시지를 보내줘야됨 부모에게 
     $어쩌구는 vue만의 특별한 변수 
     $emit 부모에게 메시지를 발산시켜줌. 
    -->
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