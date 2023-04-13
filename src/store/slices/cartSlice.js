import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../productData";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    items: PRODUCTS,
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    removeItem(state, action) {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        if (state.cart[find].quantity > 1) state.cart[find].quantity -= 1;
      }
    },

    getTotal(state) {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalAmount = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
  },
});

export const { addToCart, removeFromCart, removeItem, getTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
