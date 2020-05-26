/*
 * @Descripttion: 
 * @LastEditors: xc
 * @Date: 2020-05-26 16:30:35
 * @LastEditTime: 2020-05-26 17:12:48
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

// 引入第三方ui库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入css样式表
import "@/assets/css/element-theme.scss"
import "@/assets/css/reset.css"
import "@/assets/css/common.scss"

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
