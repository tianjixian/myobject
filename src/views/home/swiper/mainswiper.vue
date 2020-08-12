<template>
<div>
    <swiper>
        <swiper-slide><a>Slide 1</a></swiper-slide>
        <swiper-slide><a>Slide 2</a></swiper-slide>
        <swiper-slide><a>Slide 3</a></swiper-slide>
        <swiper-slide><a>Slide 4</a></swiper-slide>
        <swiper-slide><a>Slide 5</a></swiper-slide>
        <div class="swiper-pagination" slot="pagination">左右按钮</div>
    </swiper>
</div>
    
</template>

<script>
// 导入swiper组件
import swiper from '@/views/home/swiper/swiper.vue';
import swiperSlide from '@/views/home/swiper/swiperSlide.vue';

// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// // If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css'

export default {
    name:'mainswiper',
    components:{
        swiper,
        swiperSlide
    }
    
}
</script>

<style>

</style>