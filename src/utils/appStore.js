import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import BodyReducer from './BodySlice';
import userReducer from './userSlice';

export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    bodyApi: BodyReducer,
    user:userReducer,
  },
});
