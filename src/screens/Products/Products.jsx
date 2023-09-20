import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'

import { SearchInput } from '../../components'
import allProducts from '../../data/products'
import styles from './Products.style'

const Products = ({ navigation, route }) => {
  const [arrProducts, setArrProducts] = useState([])
  const [keyword, setKeyword] = useState('')
  const { category } = route.params

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
    <SafeAreaView style={styles.container}>
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrProducts}
          numColumns={2}
          columnWrapperStyle={styles.weapperStyle}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productContainer}
              onPress={() => navigation.navigate('Details', { product: item })}
            >
              <Image
                style={styles.image}
                source={{
                  uri: item.images[0],
                }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export default Products
