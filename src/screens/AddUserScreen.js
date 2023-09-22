import { View, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
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
    onPressNext,
    level, name, phone, email,
    onInputLevel,
    onInputName,
    onInputPhone,
    onInputEmail,
    saveUserInfo
  } = useAdduser();
  
  const saveUserInfoAndNavigate = async () => {
    try {
      await saveUserInfo(level, name, phone, email);
      navigation.navigate('AddUserSuccess');
      setTitleNum(0);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(titleNum === 4) {
      Keyboard.dismiss();
    }
    if(titleNum > 4) {
      saveUserInfoAndNavigate();
    }
  }, [titleNum]);

  const onPressBack = () => {
    if(titleNum > 0) setTitleNum(titleNum - 1);
    else ; // 뒤로가기 구현 필요
  }

  return (
    <View style={styles.container}>
      <AddUserHeader onPressBack={onPressBack} />
      <AddUserContent
        titleNum={titleNum}
        level={level} name={name}
        phone={phone} email={email}
        onInputLevel={onInputLevel}
        onInputName={onInputName}
        onInputPhone={onInputPhone}
        onInputEmail={onInputEmail}
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