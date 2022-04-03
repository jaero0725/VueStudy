<template>
  <!--v-bind : props전송, databinding에 쓰임 , 작명 ="실제이름" -->
  <!--props쓰는 3스텝 공부 -->
  <TheModal :onerooms="onerooms" :isModalOpen="isModalOpen" :clickIndex="clickIndex"/> <!-- 자식 컴포넌트 부모가 갖은 데이터쓰려면 props사용해야됨. -->
  <div class ="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }} </a>
  </div>
  <TheDiscount/>
  <TheCard :oneroom="oneroom" v-for="oneroom in onerooms" :key="oneroom"/>
</template>

<script>
import data from './assets/oneroom'; //확장자 생략 가능 
import TheDiscount from './Discount';
import TheModal from './Modal';
import TheCard from './Card';

export default {
  name: 'App',
  data(){ 
    return{
       오브젝트 : {name :"kim", age : 20 },
       menus : ['Home', 'Shop','About'],
       isModalOpen : false, // true : 열림, false : 닫힘 
       clickIndex : 0, //상품 뭐클릭했는지. (누른거)
       onerooms : data
    }
  },

  methods:{

  },

  components: {
    TheDiscount : TheDiscount,
    TheModal : TheModal,
    TheCard : TheCard
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
</style>
