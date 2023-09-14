import { Image, Pressable, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'

import styles from './CategoryItem.style'

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Products', { category })}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{category}</Text>
      </View>
    </Pressable>
  )
}

export default CategoryItem
