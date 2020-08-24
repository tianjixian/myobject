<template>
    <div ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
//导入better-scroll
import BScroll from 'better-scroll'

export default {
    name:"scroll",
    props:{
        probeType:{
            type:Number,
            default:0
        },
        click:{
            type:Boolean,
            default:false
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            click:this.click,
            pullUpLoad:this.pullUpLoad
        })
        this.scroll.on('scroll',(position)=>{
            this.$emit('showBacktop',position)
            
        }),
        this.scroll.on("pullingUp",()=>{
            this.$emit('loadmore')
            setTimeout(()=>{
                this.scroll.finishPullUp()
            },2000)
        })
    }

}

</script>

<style scoped>

</style>