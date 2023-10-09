import MainNavigator from './src/navigation/MainNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import fonts from './src/global/fonts'
import store from './src/store'
import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}
