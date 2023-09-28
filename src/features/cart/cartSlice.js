import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: 'userLogged',
  updatedAt: Date.now().toLocaleString(),
  total: 50,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productRepeated = state.items.find(
        item => item.id === action.payload.id
      )
      if (productRepeated) {
        const itemsUpdated = state.items.map(item => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity
            return item
          }
          return item
        })
        const newtotal = itemsUpdated.reduce(
          (acc, current) => (acc += current.price * current.quantity),
          0
        )
        console.log('este es el tota', newtotal)
        return (state = {
          ...state,
          items: itemsUpdated,
          total: 10,
          updatedAt: new Date().toLocaleString(),
        })
      } else {
        state.items.push(action.payload)
        const new2total = state.items.reduce(
          (acc, current) => (acc += current.price * current.quantity),
          0
        )

        console.log('este es el total 2', new2total)
        return (state = {
          ...state,
          total: 20,
          updatedAt: new Date().toLocaleString(),
        })
      }
    },
    removeItem: (state, action) => {},
  },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
