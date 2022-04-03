<template>
  <TheModal/>
  <div class ="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }} </a>
  </div>
  <TheDiscount/>

  <div v-for="(oneroom, i) in onerooms" :key="i">
    <img :src="oneroom.image" class="room-img">
    <h4 @click="isModalOpen = true; clickIndex = i">{{oneroom.title}}</h4>
  </div>

</template>

<script>
import data from './assets/oneroom'; //확장자 생략 가능 
import TheDiscount from './Discount';
import TheModal from './Modal';

export default {
  name: 'App',
  data(){ 
    return{
       isModalOpen : false, // true : 열림, false : 닫힘 
       clickIndex : 0, //상품 뭐클릭했는지. (누른거)
       menus : ['Home', 'Shop','About'],
       onerooms : data,
    }
  },

  methods:{

  },

  components: {
    TheDiscount : TheDiscount,
    TheModal : TheModal
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



</style>
