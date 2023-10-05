import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { setCameraImage } from '../features/auth/authSlice'
import { useGetProfileImageQuery } from '../services/shopApi'

const MainNavigator = () => {
  //const [user, setuser] = useState(null)
  const { user, localId } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetProfileImageQuery(localId)

  useEffect(() => {
    console.log(data)
    if (data) {
      dispatch(setCameraImage(data.image))
    }
  }, [data])

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator
