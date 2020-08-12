<template>
  <div class="home">
    <navbar class="navbarHome">
      <div slot="center">全民购物街</div>
    </navbar>
    <mainswiper></mainswiper>
  </div>
    

</template>

<script>
import navbar from '@/components/common/navbar.vue';
import mainswiper from '@/views/home/swiper/mainswiper.vue';
export default {
  name: 'home',
  components:{
    navbar,
    mainswiper


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.navbarHome{ background:pink;}
</style>
