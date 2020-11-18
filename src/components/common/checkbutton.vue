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
    .checkbutton img{ width: 15px; height: 15px; border-radius: 50%; border: 1px solid #999; margin-top: 36px; background: white;}
    .oncheckbutton img{ background: red;border: 1px solid red;}
</style>>
