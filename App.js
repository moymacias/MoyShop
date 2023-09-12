import { Details, Home, Products } from './src/screens'

import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
import { useState } from 'react'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('')
  const [productSelected, setProductSelected] = useState()

  if (!fontsLoaded) {
    return null
  }

  return productSelected ? (
    <Details product={productSelected} />
  ) : categorySelected ? (
    <Products
      category={categorySelected}
      setProductSelected={setProductSelected}
    />
  ) : (
    <Home setCategorySelected={setCategorySelected} />
  )
}
