<template>
  <div class="black-bg" v-if="isModalOpen">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
      <button @click="isModalOpen=false">닫기</button>
    </div>
  </div>
  <div class ="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }} </a>
  </div>
  
  <div v-for="(oneroom, index) in onerooms" :key="index">
    <img :src="onerooms[index].image" class="room-img">
    <h4 @click="isModalOpen = true">{{onerooms[index].title}}</h4>
    <p>{{onerooms[index].content}}</p>
    <p>{{onerooms[index].price}}</p> 
  </div>
</template>

<script>
import data from './assets/oneroom'; //확장자 생략 가능 

export default {
  name: 'App',
  data(){ 
    return{
       isModalOpen : false, // true : 열림, false : 닫힘 
       menus : ['Home', 'Shop','About'],
       onerooms : data,
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu{
  background:darkslateblue;
  padding :15px;
  border-radius: 5px;
}

.menu a {
  color : white;
  padding : 10px;
}
.room-img{
  width:100%;
  margin-top:40px;
}

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
