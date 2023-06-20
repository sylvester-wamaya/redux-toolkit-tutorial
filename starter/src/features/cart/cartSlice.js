import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    amount: 8,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state)=>{
            //state.cartItems = []
            return {cartItems:[]}
        },
        removeItems: (state, action)=>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item)=>item.id !== itemId)
        }
    }
})
//console.log(cartSlice)
export const {clearCart, removeItems} = cartSlice.actions
export default cartSlice.reducer