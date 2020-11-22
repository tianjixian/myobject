import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import tost from '@/components/common/toast/index.js'
import fastClick from 'fastclick'
import lazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()

// 注册toast插件
Vue.use(tost)
// 解决移动端延迟300毫秒问题
fastClick.attach(document.body)
// 使用懒加载插件
Vue.use(lazyLoad,{
  loading:require("@/assets/img/m.jpg")
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');


