import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './components/home/HomeScreen'
import NotificationsScreen from './components/NotificationsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}