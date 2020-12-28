import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home1 from './Home1'
import Home2 from './Home2'

const Stack = createStackNavigator()

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home1" component={Home1}/>
      <Stack.Screen name="Home2" component={Home2}/>
    </Stack.Navigator>
  )
}
