<template>
    <div class="title">
        <div class="title01">{{goodsInfo02.title}}</div>
        <div class="price">
            <h3>￥{{goodsInfo02.highNowPrice}}</h3>
            <span>￥{{goodsInfo02.highPrice}}</span>
            <p>{{discount}}</p>
        </div>
        <ul class="list cf">
            <li v-for="(item,index) in goodsInfo02.columns" :key="index">{{item}}</li>
        </ul>
        <ul class="service cf">
            <li v-for="(item02,index02) in goodsInfo02.services" :key="index02"><img :src="item02.icon" alt=""><span>{{item02.name}}</span></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"titleD",
    props:{
        goodsInfo02:{
            type:Object
        }
    },
    data(){
        return {
           
        }
    },
    computed:{
        discount(){
            return ((this.goodsInfo02.highNowPrice/this.goodsInfo02.highPrice).toFixed(1))*10+'折'
        }
    },
    created(){
        
    },
    updated(){
      
    }

}
</script>

<style scoped>
.title01{width: 100%;  font-size: 14px;padding: 5px;}
.price{ height: 25px;width: 100%; overflow: hidden;}
.price h3{display: inline-block; color: #ff699c; font-size: 18px;}
.price span{text-decoration:line-through; margin-left: 5px;font-size: 10px;color: #999;}
.price p{display: inline-block; padding: 3px; background:#ff699c; border-radius: 10px; font-size: 12px; color: white; margin-left: 5px;}
.list{ padding:  5px;}
.list li{float: left;width: 33%; font-size: 14px; text-align: center; color: #999;}
.list li:nth-child(1){ text-align: left;}
.list li:nth-child(3){ text-align: right;}
.service{padding: 5px; }
.service li{float: left;  width:33% ; }
.service li img{ width: 14px;display: inline-block;vertical-align:top;}
.service li span{font-size: 10px;display: inline-block;margin-left: 3px;vertical-align:top; }
</style>