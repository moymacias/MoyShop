import { FlatList, Text, View } from 'react-native'
import { Header, SearchInput } from '../../components'
import React, { useEffect, useState } from 'react'

import allProducts from '../../data/products'
import styles from './Products.style'

const Products = ({ category }) => {
  const [arrProducts, setArrProducts] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        product => product.category === category
      )
      const productsFiltered = products.filter(product =>
        product.title.includes(keyword)
      )
      setArrProducts(productsFiltered)
    } else {
      const productsFiltered = allProducts.filter(product =>
        product.title.includes(keyword)
      )
      setArrProducts(productsFiltered)
    }
  }, [category, keyword])

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default Products
