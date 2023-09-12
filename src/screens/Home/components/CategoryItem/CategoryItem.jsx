import { Image, Pressable, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'

import { Card } from '../../../../components'
import styles from './CategoryItem.style'

const CategoryItem = ({ category, setCategorySelected }) => {
  const { height, width } = useWindowDimensions()

  useEffect(() => {
    console.log(height, width)
  }, [])

  return (
    <Pressable onPress={() => setCategorySelected(category)}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem
