<template>
    <navbar class="navbarHome">
      <div slot="center">全民购物街</div>
    </navbar>
</template>

<script>
import navbar from '@/components/common/navbar.vue';
export default {
  name: 'home',
  components:{
    navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.navbarHome{ background:pink;}
</style>
