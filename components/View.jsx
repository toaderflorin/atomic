import React from 'react'
import { View, Text } from 'react-native'

export default function MyView(props) {
  const { children } = props

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {children}
    </View>
  )
}
