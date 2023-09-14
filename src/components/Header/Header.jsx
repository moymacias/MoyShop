import { Button, Text, View } from 'react-native'

import React from 'react'
import styles from './Header.style'

const Header = ({ title, action }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header
