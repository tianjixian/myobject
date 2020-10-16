<template>
    <div class="title">
        <div class="title01">{{goodsInfo02.title}}</div>
        <div class="price">
            <h3>￥{{goodsInfo02.highNowPrice}}</h3>
            <span v-show="goodsInfo02.highNowPrice!==goodsInfo02.highPrice">￥{{goodsInfo02.highPrice}}</span>
            <p v-show="goodsInfo02.highNowPrice!==goodsInfo02.highPrice">{{discount}}</p>
        </div>
        <ul class="list cf">
            <li v-for="(item,index) in goodsInfo02.columns" :key="index">{{item}}</li>
        </ul>
        <ul class="service cf">
            <li v-for="(item02,index02) in goodsInfo02.services" :key="index02"><img :src="item02.icon" alt=""><span>{{item02.name}}</span></li>
        </ul>
        <!-- 店铺信息 -->
        <div class="shop01 cf">
            <img :src="goodsInfo02.shopLogo" alt="">
            <span>{{goodsInfo02.shopname}}</span>
        </div>
        <div class="shop02 cf">
            <div class="shop02_1">
                <span>{{cSells}}</span>
                <span>总销量</span>
            </div>
            <div class="shop02_2">
                <span>{{goodsInfo02.cGoods}}</span>
                <span>全部宝贝</span>
            </div>
            <div class="shop02_3">
                <div v-for="(score,scoreIndex) in goodsInfo02.score" :key="scoreIndex">
                    <span>{{score.name}}</span> 
                    <span class="color num" :class="{bettercolor:score.score>4.6}">{{score.score}}</span> 
                    <span class="color" :class="{bettercolor:score.score>4.6}" v-show="score.score<4">低</span>
                    <span class="color" :class="{bettercolor:score.score>4.6}" v-show="score.score>=4&&score.score<=4.6">中</span>
                    <span class="color" :class="{bettercolor:score.score>4.6}" v-show="score.score>4.6">高</span>
                </div> 
            </div>
        </div>
        <div>

        </div>
        
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
          class:false
        }
    },
    computed:{
        // 打折数字处理
        discount(){
            return ((this.goodsInfo02.highNowPrice/this.goodsInfo02.highPrice).toFixed(1))*10+'折'
        },
        // 总销量处理
        cSells(){
            if(this.goodsInfo02.cSells>10000){
                return ((this.goodsInfo02.cSells/10000).toFixed(1))+'万'
            }else{
                return this.goodsInfo02.cSells
            }
            
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
.service{padding: 10px 5px; border-bottom: 2px solid #999;}
.service li{float: left;  width:33% ; }
.service li img{ width: 14px;display: inline-block;vertical-align:top;}
.service li span{font-size: 10px;display: inline-block;margin-left: 3px;vertical-align:top; }
.shop01{ height: 50px; line-height: 40px; margin: 15px 10px;}
.shop01 img{float: left; width: 50px;  border-radius: 25px; border: 1px solid #999;}
.shop01 span{float: left; font-size: 14px; margin-left: 10px;}
.shop02{ padding: 5px 0;}
.shop02>div{ width: 30%; text-align: center; float: left;}
.shop02_1 span{display: inline-block; width: 100%;font-size: 14px;}
.shop02_2 span{display: inline-block; width: 100%;font-size: 14px;}
.shop02_3{ width: 40%!important;}
.shop02_3>div{text-align: left; font-size: 14px; width: 100%;}
.shop02_3>div span{display: inline-block;}
.color{color: green;}
.num{width: 30px; text-align: center;}
.bettercolor{ color: red!important;}
</style>