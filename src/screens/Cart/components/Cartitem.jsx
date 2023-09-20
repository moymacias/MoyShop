import { Image, Pressable, Text, View } from 'react-native'

import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import styles from './CartItem.styles'

const Cartitem = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View>
        <Text style={styles.name}>Nombre</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text>Cantidad</Text>
          <Text>precio</Text>
        </View>
        <Pressable>
          <Feather name="trash" size={24} color={'red'} />
        </Pressable>
      </View>
    </View>
  )
}

export default Cartitem
