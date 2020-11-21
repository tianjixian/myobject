<template>
    <div class="checkbutton" :class="{oncheckbutton:ison}">
        <img src="@/assets/img/on.png" alt="">
    </div>
</template>

<script>
export default {
    name:'checkbutton',
    props:{
        ison:{
            type:Boolean,
            default:false  
        }
    }
   
}
</script>

<style scoped>
.checkbutton{position: relative; height: 100%;}
    .checkbutton img{position: relative; top: 50%; width: 16px; height: 16px; border-radius: 50%; border: 1px solid #999;display: block;  margin-top: -8px; background: white;}
    .oncheckbutton img{ background: red;border: 1px solid red;}
</style>>
