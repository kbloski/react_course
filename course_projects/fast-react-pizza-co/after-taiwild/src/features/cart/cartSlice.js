import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // cart: []
    cart: [
        {
            pizzaId: 12, 
            name: "Mocarella",
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32
        }
    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem( state, action){
            // payload = newItem
            state.cart.push(action.payload)
        },
        deleteItem( state, action){
            // paload = pizzaId
            state.cart = state.cart.filter( pizza => pizza.pizzaId !== action.payload)
        },
        increaseItemQuantity( state, action){
            // payload pizzaId
            const item = state.cart.find( item => item.pizzaId == action.payload)
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity( state, action){
          // payload pizzaId
          const item = state.cart.find(
            (item) => item.pizzaId == action.payload
          );
          item.quantity++;
          item.totalPrice = item.quantity * item.unitPrice;
        },
        clearCart( state, action){
            state.cart = []
        },
    }
})

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;