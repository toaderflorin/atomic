import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage1 from './HomePage1'
import HomePage2 from './HomePage2'

const Stack = createStackNavigator()

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home1" component={HomePage1}/>
      <Stack.Screen name="Home2" component={HomePage2}/>
    </Stack.Navigator>
  )
}
