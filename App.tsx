import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/components/TabNavigator'
import LoginScreen from './src/components/Login'
import RegistScreen from './src/components/Regist'
import configureStore from './src/redux';
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();
const rootStore = configureStore();

export default function App() {
  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Regist" component={RegistScreen} />
          <Stack.Screen name="Home" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
