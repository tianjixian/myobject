<template>
  <div class="buttonD cf">
      <div class="button01"><a>客服</a></div>
      <div class="button02"><a>店铺</a></div>
      <div class="button03"><a>收藏</a></div>
      <div @click="addgoods" class="button04"><a>加入购物车</a></div>
      <div class="button05"><a>购买</a></div>
  </div>
</template>

<script>
export default {
    name:'buttonD',
    methods:{
      addgoods(){
        this.$emit("addgoods")
      }
    }
}
</script>

<style scoped>
.buttonD{ width: 100%; z-index: 100; height: 49px; position: fixed; bottom: 0; left: 0; right: 0;  line-height: 49px;}
.buttonD>div{float: left; text-align: center;}
.buttonD>div a{font-size: 14px;color:#333}
.buttonD .button01{width:18%; background:white;}
.buttonD .button02{width:18%;background:white;}
.buttonD .button03{width:18%;background:white;}
.buttonD .button04{width: 26%; background: yellow;}
.buttonD .button05{width: 20%; background: #ff699c;}
.buttonD .button05 a{ color: white;}
</style>