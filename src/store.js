import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './components/cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})