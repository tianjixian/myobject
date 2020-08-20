<template>
  <div id="app">
     <router-view></router-view>
     <maintabbar></maintabbar>
    
  
  </div>
</template>

<script>
import maintabbar from '@/components/content/maintabbar'

export default {
  //名称
  name: 'App',
  //组件
  components: {
    maintabbar
  },
  //数据
  data(){
    return{
      
    }
  },
  //钩子函数（组件创建成功后执行）
  created(){
  
  }
    

}
</script>

<style>
@import './assets/css/base.css';
#app h2{margin: 0;}
</style>
 