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
        },
        increase:(state, {payload})=>{
            const cartItem = state.cartItems.find((item)=> item.id === payload.id)
            cartItem.amount = cartItem.amount + 1
        },
        decrease:(state, {payload})=>{
            const cartItem = state.cartItems.find((item)=> item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        }
    }
})
//console.log(cartSlice)
export const {clearCart, removeItems, increase, decrease} = cartSlice.actions
export default cartSlice.reducer