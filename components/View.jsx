import React from 'react'
import { View, Text } from 'react-native'

export default function MyView(props) {
  const { children } = props

  return (
    <View style={{ backgroundColor: '#111', flex: 1, borderColor: '#111' }}>
      {children}
    </View>
  )
}