import StackNavigator from './src/navigation/StackNavigator'
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return <StackNavigator />
}
