import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import {phoneValidator} from '../helpers/phoneValidator'
import axios from "axios";
import Dialog from "react-native-dialog";
import { registerUser } from '../../apiServices'

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");



  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const phoneError = phoneValidator(phone.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError || nameError || phoneError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPhone({ ...phone, error: phoneError })
      setPassword({ ...password, error: passwordError })
      return
    }
    try{
      const response = await registerUser(name.value,email.value,password.value,phone.value);
      if (response.message === "Đăng ký thành công!") {
        Alert.alert(response.message)
        navigation.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        });
      } else {
        alert(response.message);
      }
    }catch (error){
      alert(error.message);
    }
    
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phone.value}
        onChangeText={(text) => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
        autoCapitalize="none"
        autoCompleteType="phone"
        textContentType="phonenumber"
        keyboardType="phonenumber"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Đăng ký
      </Button>
      <View style={styles.row}>
        <Text>Bạn đã có tài khoản chưa? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Thông báo</Dialog.Title>
        <Dialog.Description>{dialogMessage}</Dialog.Description>
        <Dialog.Button label="Đóng" onPress={() => setDialogVisible(false)} />
      </Dialog.Container>
      
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})