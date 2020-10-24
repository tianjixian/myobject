<template>
  <div class="goodlist" >
      <!-- <div class="gooditeam01" v-for="(item,index) in goodslist" :key='index'  @click="indetail(index)">
          <a target="_blank">
            <img :src="item.show.img" alt="" @load="imgload">
            <div class="gooditeam02">
                <p>{{item.title}}</p>
                <span class="price">{{item.price}}</span>
                <span class="cfav">{{item.cfav}}</span>
            </div>
          </a>
      </div> -->
      <goodlistchild v-for="(item,index) in goodslist" :key='index' :product='item' />
  </div>

</template>

<script>
import goodlistchild from '@/components/content/goodlistchild.vue'

export default {
    name:'goodlist',
    props:{
        goodslist:{
            type:Array
        },
    },
    components:{
        goodlistchild
    },
    methods:{
    
    },
    computed:{
       
    }
}
</script>

<style scoped>
.goodlist{ display: flex; width: 100%;flex-wrap: wrap; justify-content: space-around;padding: 2px; }
</style>