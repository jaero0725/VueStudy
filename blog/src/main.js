import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 작명 from './router.js'// 라우터 가져옴.
//라우터 세팅을 다른곳에 만들어 놓고 가져오는 방식


createApp(App).use(작명).mount('#app')
