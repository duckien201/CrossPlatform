import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { Image } from 'react-native'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Tất cả đã hoàn tất!</Header>
      <Paragraph>
        Chúc bạn có trải nghiệm tuyệt vời tại CKVQ Store
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.navigate('HomeScreen')
           
        }
      >
        Đi tới trang chủ
      </Button>
    </Background>
  )
}