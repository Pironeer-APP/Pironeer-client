import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddUserScreen from './src/screens/AddUserScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
        <Stack.Screen name="AddUserSuccess" component={AddUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}