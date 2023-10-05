import React, { useState } from 'react'
import { Text, View } from 'react-native'

const Location = () => {
  const [location, setLocation] = useState({ latitude: '', longitude: '' })

  return (
    <View>
      <Text>My adress</Text>
      {location ? <View></View> : <View></View>}
    </View>
  )
}

export default Location
