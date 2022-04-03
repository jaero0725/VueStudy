<template>


  <!-- vue databinding  
  문법만 달라 배우면 코드를 잘짤수없음. 문법의 용도를 잘 알아야됨. 
  왜 쓰는지?
  1) html 하드코딩 해놓으면 변경이 어려움. 
  2) 중요) 실시간 자동 랜더링 기능을 이용하기 위해 데이터바인딩을 이용한다. 
  # 실시간 자동랜더링
  - data()를 변경하면 html에도 실시간으로 자동으로 반영됨. 
  - 자동으로 반영되기 때문에. 부드럽게 전환이 이루어짐 (wep-app 사용이 된다는점)
  - 스무스하게 자동으로 변경됨. 

  = 자주변경하는 것은 밑에 보관한다. {{}} 이방식으로 박아넣는다.
  = 
  -->
  <!-- <div>
    원룸샵 로고 - 자주 변경되지 않은 부분은 바인딩 안해두된다
    <h4>{{ products }} </h4> 
    태그 사이의 내용물에 데이터바인딩 하려고할떄 :을 사용 
    <p class="red" :style = "스타일"> {{ price1 }} 만원</p> 
    {{ }} <- data 바인딩
  </div>
  <div>
    <h4>XX 원룸</h4>
    <p> {{ price2 }} 만원</p> 
  </div> -->

  <!-- <div v-for="name in products" :key ="name">
    <h4>{{ name }}</h4>
    <p>가격아무거나 </p>
  </div> -->

  <div class ="menu">
     <!-- 작명 in 몇회 . key를 꼭 써야됨 
     menus갯수만큼 생성됨, menu라는 것 binding해줌. 
     key의 용도 : 반복문으로 생성된것, 반복문 돌면서 변하는 숫자. -->
    
    <a v-for="menu in menus" :key="menu">{{ menu }} </a>
  </div>

  <!-- <div class="contents" v-for="(price, name) in products" :key="name">
    <h4>{{ name }}</h4>
    <p>{{ price }}</p>
  </div>
   
  <div v-for="(product,i) in products02" :key="i">
    <h4>{{product}}</h4>
    <p>50만원</p>
  </div>  -->

  <!-- v-on=> @ -->
  <div>
    <h4>{{products[0]}}</h4>
    <p> 50 만원</p> 
    <!--이벤트명 
    @mouseover 
    @click
    @input...
    //입력한 코드가 길어지면, -> 함수를 만들어서 함수명을 넣어준다.
    -->
    <button @click ="increase">허위매물신고</button> <span>신고수 : {{신고수}}</span> <!--버튼누르면 신고수가 증가 -->
  </div>
  <div>
    <h4>{{products[1]}}</h4>
    <p> 60 만원</p> 
  </div>
  <div>
    <h4>{{products[2]}}</h4>
    <p> 70 만원</p> 
  </div>
</template>

<script>
 // document.getElementById().innerHTML = ?? //이런식으로 쌩 자바스크립트 사용 
 // array 자료형
 


export default {
  name: 'App',

  data(){ 
    return{
       // 여기에 데이터 보관
       // Object자료 로 저장 
       menus : ['Home', 'Shop','About'],
       products :['역삼동원룸', '천호동원룸', '마포구원룸'],
       신고수 : 0
    }
  },
  //함수만드는 공간
  methods:{
     increate(){
       this.신고수++;
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
</style>
