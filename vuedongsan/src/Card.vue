<template>
    <div>
        <img :src="oneroom.image" class="room-img">
        <h4 @click="send">{{oneroom.title}}</h4> 
        <p>{{oneroom.price}}원</p>
    </div>
    <!--메시지를 보내줘야됨 부모에게 
     $어쩌구는 vue만의 특별한 변수 
     $emit 부모에게 메시지를 발산시켜줌. 
    -->
</template>

<script>
    //this. props data $등 모두 this.쓴다. 
export default{
    name : "TheCard",
    props:{
        oneroom :  Object //데이터 형식
    },
    methods:{
        send(){
            this.$emit('openModal', this.oneroom.id)
        }
    }
}
</script>
<style>
.room-img{
  width:100%;
  margin-top:40px;
}
</style>