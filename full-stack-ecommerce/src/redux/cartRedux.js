import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    getCartTotal: (state, action) => {
      let { total, quantity } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
          return cartTotal;
        },
        { quantity: 0, total: 0 }
      );
      state.total = parseInt(total.toFixed(2));
      state.quantity = quantity;
    },
    remove: (state, action) => {
      state.products = state.products.filter(
        (product) =>
          product._id !== action.payload &&
          product.size !== action.payload &&
          product.color !== action.payload
      );
    },
    increase: (state, action) => {
      state.products = state.products.map((product) => {
        if (product._id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    },
    decrease: (state, action) => {
      state.products = state.products
        .map((product) => {
          if (product._id === action.payload) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        })
        .filter((product) => product.quantity !== 0);
    },
    clearCart: (state, action) => {
      state.products = [];
    },
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const {
  getCartTotal,
  remove,
  increase,
  decrease,
  clearCart,
  addProduct,
  // getCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
