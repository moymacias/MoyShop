import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import shopSlice from '../features/shop/shopSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    shop: shopSlice,
  },
})
