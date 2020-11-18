<template>
  <div class="cartlistitem cf" @click='checkclick'>
      <checkbutton class="one" :ison='product.checked' ></checkbutton>
      <div class="two"><img :src="product.img" alt=""></div>
      <div class="three">
          <div class="title">{{product.title}}</div>
          <div class="desc">{{product.desc}}</div>
          <div class="price">￥{{(product.price*1).toFixed(2)}}</div>
          <div class="count">x{{product.count}}</div>
      </div>
      
  </div>
</template>

<script>
import checkbutton from '@/components/common/checkbutton.vue'

export default {
    name:'cartlistitem',
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        checkbutton
    },
    methods:{
        checkclick(){
            alert("测试点击啊")
            this.product.checked=!this.product.checked
        }
    }
}
</script>

<style scoped>
.cartlistitem{ height: 115px; background: white; padding: 10px 5px 10px 5px;  border-bottom:1px solid #dfe6e9 ;}
.one{ float: left; width: 15px; height: 100%; margin-right: 2px;}
.two{ float: left;width: 30%; height: 100%;}
.two img{width: 100%; height: 100%;}
.three{ float: left;width: 63%; height: 100%; padding: 5px;padding-bottom: 0; position: relative;}
.three .title{font-size: 14px; height: 18px; width: 100%; word-break: break-all; overflow: hidden;  white-space: nowrap;text-overflow:ellipsis; }
.three .desc{margin-top: 5px; font-size: 14px; height: 18px; width: 100%; word-break: break-all; overflow: hidden;  white-space: nowrap;text-overflow:ellipsis; }
.three .price{position: absolute; left: 5px; bottom: 5px; color: orange;}
.three .count{position: absolute; right: 5px; bottom: 5px;}
</style>