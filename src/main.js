import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import tost from '@/components/common/toast/index.js'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()

// 注册toast插件
Vue.use(tost)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');


