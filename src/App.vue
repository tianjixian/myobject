<template>
  <div id="app">
     <router-view></router-view>
     <maintabbar></maintabbar>
     <div>{{result}}</div>
  
  </div>
</template>

<script>
import maintabbar from '@/components/content/maintabbar'
import {request} from '@/network/request.js'
export default {
  name: 'App',
  components: {
    maintabbar
  },
  data(){
    return{
      result:''
    }
  },
  created(){
    // 数据请求
   request({
     url:'/home/multidata',
     
   },res=>{
     this.result=res;
   },err=>{
     alert("数据请求失败");
   })
  
  }
    

}
</script>

<style>
@import './assets/css/base.css';
#app h2{margin: 0;}
</style>
 