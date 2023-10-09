import { FlatList, Pressable, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import CartItem from './components/Cartitem'
import styles from './Cart.styles'
import { usePostOrderMutation } from '../../services/shopApi'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart)
  const [triggerPost, result] = usePostOrderMutation()

  useEffect(() => {
    console.log(total)
  }, [])

  const renderItem = ({ item }) => <CartItem item={item} />

  const confirmCart = () => {
    triggerPost({ total, cart, user: 'LoggedUser' })
  }
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={confirmCart}>
          <Text>Confirm</Text>
          <View>
            <Text>{`Total $${total}`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart
