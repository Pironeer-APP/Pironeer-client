import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../assets/Theme'
import { MainButton } from '../components/Button'
import AddUserHeader from '../adduser/AddUserHeader'
import AddUserContent from '../adduser/AddUserContent'
import useAdduser from '../adduser/use-adduser'

export default function AddUserScreen({ navigation }) {
  const {
    titleNum,
    setTitleNum,
    onPressNext
  } = useAdduser();
  
  useEffect(() => {
    if(titleNum > 4) {
      navigation.navigate('AddUserSuccess');
      setTitleNum(0);
    }
  }, [titleNum]);

  const onPress = () => {
    if(titleNum > 0) setTitleNum(titleNum - 1);
  }

  return (
    <View style={styles.container}>
      <AddUserHeader onPress={onPress} />
      <AddUserContent
        titleNum={titleNum}
      />
      <TouchableOpacity onPress={onPressNext}>
        <MainButton>다음</MainButton>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.bg_black
  },
})