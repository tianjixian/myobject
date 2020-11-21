<template>
  <div class="Cartmain">
    <navbar class="Cart01"><div slot="center">购物车({{length}})</div></navbar>
    <cartList  class="Cart" />
    <cartbottom></cartbottom>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue';
import {mapGetters} from 'vuex';
import cartList from '@/views/car/cartlist.vue';
import cartbottom from '@/views/car/cartbottom.vue'
export default {
  name: 'car',
  components:{
    navbar,
    cartList,
    cartbottom
  },
  computed:{
    ...mapGetters(['length'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Cartmain{height: 100%;}
  .Cart{height:calc(100vh - 137px);word-break: break-all; margin-top: 44px; }
  .Cart01 {width: 100%; background: #ff699c;}
  .Cart01 div{ color: white;}
</style>
