export default {
    addCounter(state,payload){
        payload.count++
    },
    addToCart(state,payload){
        payload.checked=true
        state.cartlist.push(payload)
    }
    
}