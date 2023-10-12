import { Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { insertSession } from '../../db'
import { setUser } from '../../features/auth/authSlice'
import styles from './login.styles'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../services/authApi'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [triggerLogin] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    triggerLogin({
      email,
      password,
    })
      .unwrap()
      .then(result => {
        dispatch(setUser(result))
        insertSession({
          localId: result.localId,
          email: result.email,
          token: result.idToken,
        })
          .then(result => console.log(result))
          .catch(error => console.log(error.message))
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Login to start</Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={{ color: 'white' }}>Login</Text>
        </Pressable>
        <Text>No have an account?</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{ color: 'white' }}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login
