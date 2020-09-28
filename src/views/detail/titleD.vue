<template>
    <div class="title">
        <div class="title01">
            <a v-for="(item,index) in num" :key="index">{{item}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name:"titleD",
    props:{
        num:{
            type:Array
        }
    },
    data(){
        return {

        }
    },
    updated(){
        console.log(this.num)
    }

}
</script>

<style scoped>
.title01{width: 100%; display: flex; padding: 0px 30px;}
.title01 a{flex: 1;}
</style>