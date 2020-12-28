import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/home/Home'
import Notifications from './screens/notifications/Notifications'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}