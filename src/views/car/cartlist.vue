<template>
  <div class="cartlist">
    <scroll class="scroll" ref="scroll" :click="true" >
        <cart-list-item v-for="(item,index) in cartlistData" :key="index" :product='item'></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import  cartListItem from '@/views/car/cartlistitem.vue';
import {mapGetters} from 'vuex';
import scroll from '@/components/common/scroll.vue'
export default {
    name:'cartlist',
    components:{
        cartListItem,
        scroll
    },
    computed:{
        ...mapGetters(['cartlistData'])
    },
    activated(){
      this.$refs.scroll.scroll.refresh()
    }

}
</script>

<style scoped>
.cartlist{ width: 100%;}
.scroll{ height:100%; width: 100%;margin-top: 44px; overflow: hidden;}
</style>