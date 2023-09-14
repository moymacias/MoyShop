import { Button, View } from 'react-native'
import { Details, Home, Products } from '../screens'

import { Header } from '../components'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          /* header: () => (
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Button onPress={() => navigation.goBack()} title="Go Back" />
              <Header title={route.name} />
            </View>
          ), */
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
