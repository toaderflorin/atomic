import React from 'react'
import { Text, View } from '../../components'
import { Button } from 'react-native'
import { View as RnView } from 'react-native'

export default function HomePage1() {
  return (
    <View>
      <RnView style={{ width: 100, height: 100, backgroundColor: 'red', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 1.0, shadowRadius: 10 }}></RnView>
      <Button title="Some text" style={{ shadowOffset: { width: 5, height: 5 }, shadowOpacity: 1.0, shadowRadius: 10 }} />
      <Text>Home2322</Text>
    </View>
  )
}