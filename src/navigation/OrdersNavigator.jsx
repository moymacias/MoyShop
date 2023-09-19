import { Orders } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function OrdersNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  )
}

export default OrdersNavigator
