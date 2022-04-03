<template>
    <div v-for="(oneroom, i) in onerooms" :key="i">
        <img :src="oneroom.image" class="room-img">
        <!-- <h4 @click="isModalOpen = true; clickIndex = i">{{oneroom.title}}</h4> -->
    </div>
</template>

<script>
export default{
    name : "TheCard",
    props:{
        onerooms :  Array//데이터 형식
    }
}
</script>
<style>

</style>