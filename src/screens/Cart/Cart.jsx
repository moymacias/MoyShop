import { FlatList, Pressable, Text, View } from 'react-native'

import CartItem from './components/Cartitem'
import React from 'react'
import dataCart from '../../data/dataCart'
import styles from './Cart.styles'

const Cart = () => {
  const renderItem = () => <CartItem />

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={dataCart}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable>
          <Text>Confirm</Text>
          <View>
            <Text>{`Total $100`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart
