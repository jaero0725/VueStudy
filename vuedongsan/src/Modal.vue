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

<!-- Watcher : data 감시하는 함수 /  input을 받는거라면 거의 필요함.-->
<script>
export default{
    name : "TheModal",
    data(){
        //자식 컴포넌트에 만들떄 부모도 쓰는 데이터라면 부모컴포넌트에 만들기
        //밑으로 전송하는것이 더 쉽기 떄문에. 
        //props는 수정이 불가능하다. const같음. read only데이터라고 보면됨.
        //부모의 데이터를 수정하고싶으면 custom event를 사용해야됨.
        return{
            month : 1,
        } 
    },
    update(){
        if(this.month == 2){
            alert("2라고 기입하다니!");
        }
    },
    //데이터를 감시하는 감시자
    watch :{
        //month에 숫자만 있는지 감시 
        //month라는 이름으로 함수를 만든다. 
        //month데이터가 변화할때마다, 이 함수가 쓱 쓰인다. 
        month(a){ // a == 변경후 month임 , b == 변경전 데이터임
            //사용자가 month를 글자로 입력하면, 경고문 띄움.
            //사용자가 month에 입력한 데이터가 13보다 크면, 경고문 띄움
            if(a > 12) {
                alert("13개월이상 입력불가합니다.");
                this.month = 1; 
            }
            //글자 check 글자가 아니면, month를 1로 변경해줌. 
            if(isNaN(a) == true){
                alert("문자열을 입력하면 안됩니다.");
                this.month = 1; 
            }

            //체크할게 너무 많으면, Vue용 form validation라이브러리를 쓴다. 
            
        }
    },
    props :{
        onerooms :  Array ,//데이터 형식
        isModalOpen : Boolean,
        clickIndex : Number,
    },
    methods:{
        close(){ //애밋하면 애미한테 메시지전달
            this.$emit('closeModal');
        },
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