<template>
  <!--v-bind : props전송, databinding에 쓰임 , 작명 ="실제이름" -->
  <!--props쓰는 3스텝 공부 -->
  <transition name="fade">
    <TheModal @closeModal="isModalOpen=false" 
    :onerooms="onerooms" :isModalOpen="isModalOpen" 
    :clickIndex="clickIndex"
    />
  </transition>
     <!-- 자식 컴포넌트 부모가 갖은 데이터쓰려면 props사용해야됨. -->
  <div class ="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }} </a>
  </div>

  <TheDiscount v-if="showDiscount" :saleRate="saleRate"/> <!--2초후에 삭제하려면?-->

  <!-- 정렬기능 priceSort 함수 -->
  <button @click="priceSort">가격순정렬</button>
  <button @click="priceReSort">가격역순정렬</button>
  <button @click="sortBack">되돌리기</button>
  <!--@작명한거 $event 자식이 전달해준 데이터-->
  <TheCard @openModal="isModalOpen=true; clickIndex=$event" :oneroom="oneroom" v-for="oneroom in onerooms" :key="oneroom"/>
</template>
<!-- CSS 로 애니메이션 주려면
1. 시작전 class 명
2. 애니메이션 끝난 후 class명
3. 그리고 원할때 2번 class 명 부착
-->
<script>
import data from './assets/oneroom'; //확장자 생략 가능 
import TheDiscount from './Discount';
import TheModal from './Modal';
import TheCard from './Card';

export default {
  name: 'App',
  data(){ 
    return{
       showDiscount : true,
       오브젝트 : {name :"kim", age : 20 },
       menus : ['Home', 'Shop','About'],
       isModalOpen : false, // true : 열림, false : 닫힘 
       clickIndex : 0, //상품 뭐클릭했는지. (누른거)

       onerooms : data, //정렬은 이걸로, 
       oneroomsOriginal : [...data], //오리지널 데이터 백하면 이걸로  (데이터 원본)
       //각각 별개로 저장하고 싶으면 [...?] 이런식으로

       saleRate : 10
    }
  },

  methods:{
    priceSort(){
      this.onerooms.sort(
        function(a,b){
          return a.price-b.price;  // 음수면, 왼쪽으로 보내라
        }); 
    },
    //sort()하면 원본이 변형됨, 유지하려면 map으로 함. -> 원본 데이터 보호하는게 유행. 
    sortBack(){
      //this.onerooms = this.oneroomsOriginal; // 이렇게 하면안됨.ㅇㅇ , 값을 공유하라는 뜻. 
      this.onerooms = [...this.oneroomsOriginal]
      //데이터베이스에서 해도됨. 
    },
    //가격역순정렬
    priceReSort(){
      this.onerooms.sort(
        function(a,b){
          return b.price-a.price;  // 음수면, 왼쪽으로 보내라
        }); 
    },
  },
  //서버에서 데이터가져올때 lifecycle가져옴. 
  //html 생성전 데이터만 존재할떄,
  create(){

  },
  // mount됐을때.
  mounted(){ 
    //this 쓰려면 => function으로 
  //  setTimeout(()=>{
  //    this.showDiscount = false; 
  //  },2000)
  
    // # 30%할인이, 1초마다 1%씩 감소하도록 코드를 짠다. 
    setInterval(() => {
      if(this.saleRate <= 0 ) this.saleRate = 0;
      else this.saleRate--;
    }, 1000);
  //누군가가, 2라고 기입하면 알림창을 띄우려면? .->update를 사용 ? 
  
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

.fade-enter-from{
  transform:translateY(-1000px);
} 
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  transform:translateY(0px);
}
.fade-leave-from{
  transform:translateY(0px);
} 
.fade-leave-active{
  transition: all 0.5s;
}
.fade-leave-to{
  transform:translateY(-1000px);
}
</style>
