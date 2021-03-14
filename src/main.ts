import Vue from 'vue';
import App from './App.vue';
import { Core } from './core/core.service';
import core from './core/core.service';
import './useeleui';
import './usevantui';






import store from './store/index';
import router from './router/index';






declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $core: Core
  }
}
Vue.prototype.$core = core;
let bus = new Vue()
Vue.prototype.bus = bus
Vue.config.productionTip = false;

declare global {
  interface Window { sensors: any; sensorsDataAnalytic201505: any;[index: string]: any }
}

router.beforeEach((to, from, next) => {
  document.title = "待定"
  setTimeout(() =>{
    next()
  },1000)




  
})

router.afterEach((to,from) =>{

  let scrollMain:HTMLElement = document.querySelector(".mescroll") as HTMLElement
  if(scrollMain){
    scrollMain.scrollTop = 0
  }
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app');
