
export default {
    addcar(context,payload){
        return new Promise((resolve,reject)=>{
            let oldProduct=null;
            for(let item of context.state.cartlist){
                if(item.id === payload.id){
                    oldProduct=item
                }
            }
            if(oldProduct){
                context.commit('addCounter',oldProduct);
                resolve('商品数量+1')
            }else{
                payload.count=1
                context.commit('addToCart',payload)
                resolve('添加了新的商品')
            }
        })

        
       
    }
}