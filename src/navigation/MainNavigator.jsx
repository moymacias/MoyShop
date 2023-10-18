import React, { useEffect, useState } from 'react'
import { setCameraImage, setUser } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { fetchSession } from '../db'
import { useGetProfileImageQuery } from '../services/shopApi'

const MainNavigator = () => {
  //const [user, setuser] = useState(null)
  const { user, localId } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetProfileImageQuery(localId)

  useEffect(() => {
    //('Main navigator data', data)
    if (data) {
      dispatch(setCameraImage(data.image))
    }
  }, [data])

  useEffect(() => {
    ;(async () => {
      try {
        const session = await fetchSession()
        //console.log('Esta es la sesion', session)
        if (session.rows.length) {
          console.log(session.rows._array[0])
          const user = session.rows._array[0]
          dispatch(setUser(user))
        }
      } catch (error) {
        //console.log('Error en obtener ususario', error.message)
      }
    })()
  }, [])

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator
