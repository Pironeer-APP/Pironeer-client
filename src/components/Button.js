import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontStyledText } from './Text'
import { COLORS } from '../assets/Theme'

export const MainButton = ({children}) => {
  return (
    <View style={styles.container}>
      <FontStyledText style={styles.text}>{children}</FontStyledText>
    </View>
  )
}

export const MiniButton = ({outline, children}) => {
  return (
    <View style={miniStyles({outline}).miniContainer}>
      <FontStyledText style={miniStyles({outline}).miniText}>{children}</FontStyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: 70,
    backgroundColor: COLORS.green,
    borderRadius: 15,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: '#000000',
  },
})

const miniStyles = ({outline}) => StyleSheet.create({
  miniContainer: {
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: outline ? 'transparent' : COLORS.green,
    borderRadius: 13,
    borderColor: outline ? COLORS.green : 'none',
    borderWidth: 3,
  },
  miniText: {
    fontSize: 18,
    textAlign: 'center',
    color: outline ? 'white' : '#000000',
  }
})