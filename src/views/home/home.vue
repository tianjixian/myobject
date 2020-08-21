<template>
  <div class="home">
    <navbar class="navbarHome">
      <div slot="center">全民购物街</div>
    </navbar>
    <mainswiper :images="bannerimg"></mainswiper>
    <homechild01 :recommend="recommend"></homechild01>
    <homechild02></homechild02>
    <topnav :navtitle="nav"></topnav>
    <ul>
      <li>数据1</li>
      <li>数据2</li>
      <li>数据3</li>
      <li>数据4</li>
      <li>数据5</li>
      <li>数据6</li>
      <li>数据7</li>
      <li>数据8</li>
      <li>数据9</li>
      <li>数据10</li>
      <li>数据11</li>
      <li>数据12</li>
      <li>数据13</li>
      <li>数据14</li>
      <li>数据15</li>
      <li>数据16</li>
      <li>数据17</li>
      <li>数据18</li>
      <li>数据19</li>
      <li>数据20</li>
    </ul>
  </div>
    

</template>

<script>
// 组件
import navbar from '@/components/common/navbar.vue';
import mainswiper from '@/views/home/swiper/mainswiper.vue';
import topnav from '@/components/content/topnav.vue';
import homechild01 from '@/views/home/homechild01.vue';
import homechild02 from '@/views/home/homechild02.vue'
// 数据请求
import {home01} from '@/network/home.js'


export default {
  name: 'home',
  data(){
      return{
          nav:['新款','人气','推荐'],
          ison:0,
          bannerimg:[],
          recommend:[],
          
          
      }
  },
  components:{
    navbar,
    mainswiper,
    topnav,
    homechild01,
    homechild02
  },
  //生命周期（组件创建成功后执行）
  created(){
    home01().then(res=>{
      console.log(res)
      this.bannerimg=res.data.data.banner.list
      this.recommend=res.data.data.recommend.list
    }).catch(err=>{
      alert('数据请求失败')
    })
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbarHome{ background:pink;}
</style>
