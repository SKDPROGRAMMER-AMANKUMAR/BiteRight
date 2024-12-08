import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
}

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state,action) => {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if(existingItem){
               state.cart =  state.cart.map((item)=>{
                 return    item.id === action.payload.id ? {...item,qty:item.qty + 1} : item
                })
            } else {
                state.cart.push(action.payload);
            }
        },
        remove: (state,action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        increament: (state,action) => {
            state.cart =  state.cart.map((item)=>{
                 return    item.id === action.payload.id ? {...item,qty:item.qty + 1} : item
                })
        },
        Decreament: (state,action) => {
            state.cart =  state.cart.map((item)=>
                     item.id === action.payload.id ? {...item,qty:item.qty - 1 } : item
                )
        }
    },
});

export const { addToCart, remove,increament,Decreament } = CartSlice.actions;
export default CartSlice.reducer;