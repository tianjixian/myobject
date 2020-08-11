import Vue from 'vue'
import Router from 'vue-router'

// 懒加载导入组件
const home= () => import('@/views/home/home.vue');
const sort= () => import('@/views/sort/sort.vue');
const car= () => import('@/views/car/car.vue');
const profile= () => import('@/views/profile/profile.vue');


Vue.use(Router);
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
};

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/home',
      component:home
    },
    {
      path: '/sort',
      component:sort
    },
    {
      path: '/car',
      component:car
    },
    {
      path: '/profile',
      component:profile
    },
  ],
  mode:'history'
})
