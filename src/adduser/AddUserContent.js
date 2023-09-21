import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../assets/Theme';
import { FontStyledText } from '../components/Text';

export default function AddUserContent({titleNum}) {
  const titleList = [
    "신입 부원의 기수를 입력해 주세요",
    "이름을 입력해 주세요",
    "전화번호를 입력해 주세요",
    "이메일을 입력해 주세요",
    "정보가 올바른지 확인해 주세요",
  ]

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.contentTitle}>{titleList[titleNum]}</Text>
      <ScrollView>
      {titleNum >= 3 &&
      <View style={styles.inputWrapper}>
      {titleNum > 3 &&
        <FontStyledText style={styles.inputDesc}>신입 부원 이메일</FontStyledText>
      }
      <TextInput style={styles.textInput} placeholder="piropiro@gmail.com" placeholderTextColor={COLORS.light_gray} />
      </View>
      }
      {titleNum >= 2 &&
      <View style={styles.inputWrapper}>
      {titleNum > 2 &&
        <FontStyledText style={styles.inputDesc}>신입 부원 전화번호</FontStyledText>
      }
      <TextInput style={styles.textInput} placeholder="010-0000-0000" placeholderTextColor={COLORS.light_gray} />
      </View>
      }
      {titleNum >= 1 &&
      <View style={styles.inputWrapper}>
      {titleNum > 1 &&
        <FontStyledText style={styles.inputDesc}>신입 부원 이름</FontStyledText>
      }
      <TextInput style={styles.textInput} placeholder="김피로" placeholderTextColor={COLORS.light_gray} />
      </View>
      }
      {titleNum >= 0 &&
      <View style={styles.inputWrapper}>
      {titleNum > 0 &&
        <FontStyledText style={styles.inputDesc}>신입 부원 기수</FontStyledText>
      }
      <TextInput style={styles.textInput} placeholder="19" placeholderTextColor={COLORS.light_gray} />
      </View>
      }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  contentTitle: {
    fontFamily: 'Interop-Bold',
    color: 'white',
    fontSize: 25,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  inputWrapper: {
    padding: 15
  },
  textInput: {
    color: 'white',
    height: 60,
    marginBottom: 15,
    borderWidth: 2,
    paddingHorizontal: 10,
    fontSize: 25,
    borderBottomColor: COLORS.light_gray,
  },
  inputDesc: {
    color: COLORS.green,
    fontSize: 17,
    paddingHorizontal: 10,
  }
})