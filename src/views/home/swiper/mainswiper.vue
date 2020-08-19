<template>
  <Swiper class="swiper" :options="swiperOption">
    <swiper-slide>222222222222</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'

export default {
    name: 'swiper-example-pagination',
    title: 'Pagination',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          autoplay: {
　　　　    delay: 1000,  
          
          
　　      },
          spaceBetween:30,
          loop: true,
          
        }
      }
    }
}
</script>

<style scoped>

</style>