import { Text, View } from 'react-native'

import React from 'react'
import styles from './Header.style'

const Header = ({ title }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header
