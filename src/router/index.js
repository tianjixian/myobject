import Vue from 'vue'
import Router from 'vue-router'

// 懒加载导入组件
const home= () => import('@/components/content/pages/home/home.vue');
const sort= () => import('@/components/content/pages/sort/sort.vue');
const car= () => import('@/components/content/pages/car/car.vue');
const profile= () => import('@/components/content/pages/profile/profile.vue');


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
