import BottomTabNavigator from './src/navigation/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
