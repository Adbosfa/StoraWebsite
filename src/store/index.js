import { configureStore } from '@reduxjs/toolkit';

import productSlice from '../store/ProductSlice';
import cartSlice from './cartSlice';
const store = configureStore({
  reducer: {
    products: productSlice,
    cartSlice: cartSlice
    // Add other reducers here if you have any
  },
});
export default store;