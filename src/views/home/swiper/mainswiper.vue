<template>
  <Swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in bannerimg" :key='index'><a :href="item.link"><img :src="item.image" alt=""></a></swiper-slide>
    
    <div class="swiper-pagination" slot="pagination"></div>
  </Swiper>
</template>

<script>
  import {request} from '@/network/request.js'
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper'  
 import 'swiper/css/swiper.css'

  export default {
    name: 'mainswiper',
    components: {
      Swiper,
      SwiperSlide
    },
    
    data() {
      return {
        bannerimg:[],
        swiperOptions: {
           pagination: {
            el: '.swiper-pagination'
          },
          loop:true,
          autoplay:true,
          initialSlide :1, 
          
        },
       
      }
    },
    //定义这个sweiper对象  
    computed: {  

        swiper() {  
          return this.$refs.mySwiper.swiper;  
        }  
    }, 
     //生命周期（组件创建成功后执行）
    created(){
      request({
        url:'/home/multidata'
      }).then(res=>{
        console.log(res)
        this.bannerimg=res.data.data.banner.list
      }).catch(err=>{
        alert('数据请求失败')
      })
    }
  }
</script>

<style scoped>
.swiper-container{ width: 100%; height: 250px; overflow: hidden;}
.swiper-container img{ width: 100%; height: 100%;}
</style>






   

