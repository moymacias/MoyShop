import * as ImagePicker from 'expo-image-picker'

import { Image, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCameraImage } from '../../features/auth/authSlice'
import styles from './Profile.styles'

const Profile = () => {
  const image = useSelector(state => state.auth.imageCamera)
  const dispatch = useDispatch()

  useEffect(() => {
    //console.log(image)
  }, [image])

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      return false
    }
    return true
  }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions()

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      })
      if (!result.canceled) {
        console.log(result.assets)
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }
  }

  const confirmImage = () => {
    dispatch(setCameraImage(image))
  }

  return (
    <View style={styles.container}>
      {image ? null : (
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Pressable style={styles.cameraButton} onPress={pickImage}>
        <Text>Tomar Foto de perfil</Text>
      </Pressable>
    </View>
  )
}

export default Profile
