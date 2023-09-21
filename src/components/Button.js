import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontStyledText } from './Text'

export const MainButton = () => {
  return (
    <View style={styles.container}>
      <FontStyledText style={styles.text}>다음</FontStyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: 70,
    backgroundColor: '#0BEC12',
    borderRadius: 15,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: '#000000',
  },
})