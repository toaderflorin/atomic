import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage1 from './HomePage1'
import HomePage2 from './HomePage2'

const Stack = createStackNavigator()

function getHeaderOptions(title) {
  return {
    title,
    headerStyle: {
      backgroundColor: 'black'
    }
  }
}

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage1" component={HomePage1} options={getHeaderOptions('Page 1')}/>
      <Stack.Screen name="Home2" component={HomePage2} options={getHeaderOptions('Page 2')}/>
    </Stack.Navigator>
  )
}
