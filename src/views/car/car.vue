<template>
  <div class="Cart" @click="click01">
    <navbar class="Cart01"><div slot="center">购物车({{length}})</div></navbar>
    <cartList/>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue';
import {mapGetters} from 'vuex';
import cartList from '@/views/car/cartlist.vue'
export default {
  name: 'car',
  components:{
    navbar,
    cartList
  },
  computed:{
    ...mapGetters(['length'])
  },
  methods:{
    click01(){
      alert(666)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Cart{height:100%; background: red; }
  .Cart01 { background: #ff699c;}
  .Cart01 div{ color: white;}
</style>
