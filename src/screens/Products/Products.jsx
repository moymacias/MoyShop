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
import styles from './Products.style'
import { useGetProductsByCategoryQuery } from '../../services/shopApi'
import { useSelector } from 'react-redux'

const Products = ({ navigation }) => {
  const category = useSelector(state => state.shop.categorySelected)
  const [keyword, setKeyword] = useState('')
  const [products, setProducts] = useState([])
  const { data, isLoading } = useGetProductsByCategoryQuery(category)

  useEffect(() => {
    //(data, isLoading)
    if (!isLoading) {
      const dataArr = Object.values(data)
      setProducts(dataArr)
      const productsFiltered = dataArr.filter(product =>
        product.title.includes(keyword)
      )
      setProducts(productsFiltered)
    }
  }, [isLoading, keyword])

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={products}
            numColumns={2}
            columnWrapperStyle={styles.weapperStyle}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.productContainer}
                onPress={() =>
                  navigation.navigate('Details', { product: item })
                }
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
        )}
      </View>
    </SafeAreaView>
  )
}

export default Products
