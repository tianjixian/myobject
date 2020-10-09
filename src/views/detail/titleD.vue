<template>
    <div class="title">
        <div class="title01">{{goodsInfo02.desc}}</div>
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
            title:''
        }
    },
    created(){
        
    },
    updated(){
      
    }

}
</script>

<style scoped>
.title01{width: 100%;  font-size: 14px;}
</style>