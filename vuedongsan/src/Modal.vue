<template>
  <!-- 모달창 -->
  <div class="black-bg" v-if="isModalOpen">
    <div class="white-bg">
      <img :src="onerooms[clickIndex].image" class="room-img">
      <h4>{{ onerooms[clickIndex].title }}</h4>
      <p> {{ onerooms[clickIndex].content }} </p>
      <!-- <input @input="month = $event.target.value"> input 받는거 @input 할때마다 , @change 커서다른대 찍으면 -->
      <input v-model="month"> <!--여기에 입력한걸 밑에 저장-->
      <!--수량은 바로 저장 $event e랑 똑같은 파라미터 역할-->
       <!--초기값이 중요, 문자 or 숫자-->
      <p>  {{month}}개월 선택함 : 가격 : {{ onerooms[clickIndex].price * month}}원 </p>
      <button @click="close">닫기</button>
      <!-- v-model -->
    </div>
  </div>
</template>

<script>
export default{
    name : "TheModal",
    data(){
        //자식 컴포넌트에 만들떄 부모도 쓰는 데이터라면 부모컴포넌트에 만들기
        //밑으로 전송하는것이 더 쉽기 떄문에. 
        //props는 수정이 불가능하다. const같음. read only데이터라고 보면됨.
        //부모의 데이터를 수정하고싶으면 custom event를 사용해야됨.
        return{
            month : 1
        } 
    },
    props :{
        onerooms :  Array ,//데이터 형식
        isModalOpen : Boolean,
        clickIndex : Number
    },
    methods:{
        close(){ //애밋하면 애미한테 메시지전달
            this.$emit('closeModal');
        }
    }
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