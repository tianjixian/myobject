export default {
    addcar(context,payload){
        let oldProduct=null;
        for(let item of context.state.cartlist){
            if(item.id === payload.id){
                oldProduct=item
            }
        }
        if(oldProduct){
            context.commit('addCounter',oldProduct)
        }else{
            payload.count=1
            context.commit('addToCart',payload)
        }
        console.log(context.state.cartlist[0].count)
       
    }
}