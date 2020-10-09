<template>
  <Swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide   v-for="(item,index) in images.slice(0,4)"  :key='index'><a  :href="item.link" ><img :src="item" alt=""></a></swiper-slide>
    
    <div class="swiper-pagination" slot="pagination"></div>
  </Swiper>
</template>

<script>
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper'  
 import 'swiper/css/swiper.css'

  export default {
    name: 'mainswiper',
    props:{
      images:{
        type:Array,
        default(){
          return []
        }
      }
    },
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
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          slidesPerView :1,
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
   
  }
</script>

<style scoped>
.swiper-container{ width: 100%; height: 300px; overflow: hidden; margin-top: 44px;}
.swiper-container img{ width: 100%; height: auto;}
</style>






   

