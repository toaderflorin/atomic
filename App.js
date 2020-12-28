import React from 'react'
import { Appearance } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/home/Home'
import Notifications from './screens/notifications/Notifications'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DarkTheme } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
