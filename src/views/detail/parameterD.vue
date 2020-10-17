<template>
    <div class="parameterD" v-if="parameter0">
        <ul class="rule cf" v-for="(item01,index01) in parameter0.rule.tables" :key="index01+1">
            <ul class="cf" v-for="(item03,index03) in item01" :key="index03+3">
                 <li v-for="(item04,index04) in item03" :key="index04+4">{{item04}}</li> 
            </ul>
           
        </ul>
        <ul class="info cf" v-for="(item02,index02) in parameter0.info.set" :key="index02+2">
            <li>{{item02.key}}</li> 
            <li>{{item02.value}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'parameterD',
    props:{
        parameter0:Object,
    },
    

}
</script>

<style  scoped>
.rule li{ float: left;width: 20%; color: #ff699c; line-height: 35px; font-size: 14px;}
.rule li:first-child{width: 20%; color: black;}
.info li{ float: left;width: 80%; color: #ff699c; line-height: 35px; font-size: 14px;}
.info li:first-child{width: 20%; color: black;}
</style>