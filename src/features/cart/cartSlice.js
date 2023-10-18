import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: 'userLogged',
  updatedAt: Date.now().toLocaleString(),
  total: 0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const products = state.items
      const productRepeated = products.find(
        item => item.id === action.payload.id
      )

      if (!productRepeated)
        return {
          ...state,
          items: [...state.items, action.payload],
          total: state.total + action.payload.price,
          updatedAt: new Date().toLocaleString(),
        }

      const itemsUpdated = products.map(item => {
        if (item.id === action.payload.id) {
          return Object.assign({}, item, {
            quantity: item.quantity + action.payload.quantity,
          })
        }
        return item
      })
      return {
        ...state,
        items: itemsUpdated,
        total: state.total + action.payload.price,
        updatedAt: new Date().toLocaleString(),
      }
    },
    removeItem: (state, action) => {},
  },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
