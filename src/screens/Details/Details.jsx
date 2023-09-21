import { Image, SafeAreaView, Text, View } from 'react-native'

import React from 'react'
import styles from './Details.style'

const Details = ({ route }) => {
  const { product } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: product.images[0] }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`}</Text>
    </SafeAreaView>
  )
}

export default Details
