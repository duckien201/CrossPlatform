import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { Image, StyleSheet } from 'react-native'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      
      <Logo />
      {/* <Header>Login Template</Header> */}
      <Paragraph>
        CKVQ app thời trang dành cho mọi người
      </Paragraph>
      <Paragraph>
        Bạn đã có tài khoản chưa ?
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Đã có
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Chưa có
      </Button>
    </Background>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 4,
  },
  image: {
    width: "100%",
    height : 400
  },
})