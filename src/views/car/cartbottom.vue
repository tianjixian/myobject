<template>
  <div class="cartbottom">
     <div class="all">
        <checkbutton :ison="ison" @click.native="clickall"></checkbutton>
         <p>全选</p>
     </div>
     <div class="sum"> 合计：{{cartsum}}</div>
     <div class="go" @click="go">去结算({{cartnumber}})</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import checkbutton from '@/components/common/checkbutton.vue'

export default {
    name:'cartbottom',
    components:{
        checkbutton
    },
    computed:{
        ...mapGetters(['cartlistData']),
        cartsum(){
            return "￥"+ this.cartlistData.filter(item => {
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        cartnumber(){
            return this.cartlistData.filter(item=>item.checked).length
        },
        ison(){
            if(this.cartlistData.length===0){return false}
            for (let item of this.cartlistData){
                if(!item.checked){ 
                    return false
                }
            }
            return true
        }
    },
    methods:{
        clickall(){
            if(this.ison){
                this.cartlistData.forEach(item => {item.checked=false});
            }else{
                this.cartlistData.forEach(item => {item.checked=true});
            }
        },
        go(){
            if(this.cartnumber===0){
                this.$toast.show("请先添加商品")
            }
        }
    }
}
</script>

<style scoped>
.cartbottom{display: flex; height: 44px; line-height: 44px; position: fixed; z-index: 999;bottom: 50px;  width: 100%; font-size: 14px; background: white; padding: 0 5px;}
.cartbottom .all{width: 60px; display: flex;}
.cartbottom .all p{margin-left: 10px;}
.cartbottom .sum{flex: 1;}
.cartbottom .go{width: 100px; text-align: center; background: #ff699c; color: white;}
</style>