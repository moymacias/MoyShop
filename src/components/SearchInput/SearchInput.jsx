import { Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import AntDesign from '@expo/vector-icons/AntDesign'
import styles from './SearchInput.style'

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState('')

  const search = () => {
    onSearch(value)
  }

  const clearInput = () => {
    setValue('')
    onSearch('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Search"
      />
      <AntDesign name="search1" size={25} color={'black'} onPress={search} />
      <AntDesign
        name="closecircleo"
        size={25}
        color={'black'}
        onPress={clearInput}
      />
    </View>
  )
}

export default SearchInput
