<template>
  <div class="goodlist">
      <div class="gooditeam01" v-for="(item,index) in goodslist" :key='index'>
          <a :href="item.link">
            <img :src="item.show.img" alt="">
            <div class="gooditeam02">
                <p>{{item.title}}</p>
                <span class="price">{{item.price}}</span>
                <span class="cfav">{{item.cfav}}</span>
            </div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'goodlist',
    props:{
        goodslist:{
            type:Array
        }
    },
}
</script>

<style scoped>
.goodlist{ display: flex; width: 100%;flex-wrap: wrap; justify-content: space-around;padding: 2px; }
.gooditeam01{width: 48%; }
.gooditeam01 img{ width: 100%;}
.gooditeam02{ text-align: center;}
.gooditeam02 p{ display: block; font-size: 16px; height: 30px; line-height: 30px; white-space: nowrap;
    text-overflow: ellipsis;overflow: hidden;word-break: break-all;}
.gooditeam02 span{ height: 30px; line-height: 30px;font-size: 16px; display: inline-block; padding: 0 5px;}
.gooditeam02 .price{  color:#ff699c}
.gooditeam02 .cfav{ padding-left: 25px; background: url(../../assets/img/collect_icon.png) no-repeat left center; background-size: 25px 25px;margin-left: 10px;}
</style>