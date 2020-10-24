<template>
    <div class="gooditeam01" @click="indetail"  >
        <a target="_blank">
        <img :src="showimg" alt="" @load="imgload">
        <div class="gooditeam02">
            <p>{{product.title}}</p>
            <span class="price">{{product.price}}</span>
            <span class="cfav">{{product.cfav}}</span>
        </div>
        </a>
    </div>
</template>

<script>
export default {
    name:'goodlistchild',
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        },
        index0:{
            type:Number
        }
    },
    methods:{
        imgload(){
            this.$bus.$emit('imgload01')
        },
        indetail(){
            this.$router.push("/detail/"+this.product.iid)
            
        }, 
    },
    computed:{
        showimg(){
            return this.product.image || this.product.show.img
        },
        
        
    }
}
</script>

<style scoped>
.gooditeam01{width: 48%; }
.gooditeam01 a{ display: block;}
.gooditeam01 img{ width: 100%;}
.gooditeam02{ text-align: center;}
.gooditeam02 p{ display: block; font-size: 16px; height: 30px; line-height: 30px; white-space: nowrap;
    text-overflow: ellipsis;overflow: hidden;word-break: break-all;}
.gooditeam02 span{ height: 30px; line-height: 30px;font-size: 16px; display: inline-block; padding: 0 5px;}
.gooditeam02 .price{  color:#ff699c}
.gooditeam02 .cfav{ padding-left: 25px; background: url(../../assets/img/collect_icon.png) no-repeat left center; background-size: 25px 25px;margin-left: 10px;}
</style>