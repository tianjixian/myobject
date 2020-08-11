<template>
    <navbar class="navbarCar">
      <div slot="center">购物车</div>
    </navbar>
</template>

<script>
import navbar from '@/components/common/navbar.vue';

export default {
  name: 'car',
  components:{
    navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .navbarCar div{ color: black;}
</style>
