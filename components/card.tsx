import React from 'react'
import { View, Text } from 'react-native'
export const Card = ({ loading, error, title }: { loading: any; error: any; title : any }) => {
  let content
  if (error) {
    content = <Text style={{ fontSize: 24, color: 'red' }}>Error</Text>
  } else if (loading) {
    content = <Text style={{ fontSize: 24, color: 'green' }}>Loading...</Text>
  } else {
    content = (
      <View>
        <Text style={{ fontSize: 60 }}>{title}</Text>
      </View>
    )
  }
  return <View>{content}</View>
}
  
