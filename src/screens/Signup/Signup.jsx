import { Pressable, Text, TextInput, View } from 'react-native'

import React from 'react'
import styles from './Signup.styles'

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Sing up to start</Text>
        <TextInput style={styles.inputEmail} />
        <TextInput style={styles.inputEmail} />
        <TextInput style={styles.inputEmail} />
        <Pressable style={styles.loginButton}>
          <Text style={{ color: 'white' }}>Sign up</Text>
        </Pressable>
        <Text>Already have an account?</Text>
        <Pressable style={styles.loginButton}>
          <Text style={{ color: 'white' }}>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Signup
