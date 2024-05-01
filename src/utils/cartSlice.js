import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart", 
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.card.info.price;
      } else {
        state.items.push({
          card: newItem.card,
          quantity: 1,
          totalPrice: newItem.card.info.price,
        });
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.card.info.price;

        if (existingItem.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload.card.info.id
          );
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload.card.info.id
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, decreaseQuantity, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
