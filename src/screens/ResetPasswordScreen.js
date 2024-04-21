import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import axios from 'axios'
import { passwordValidator } from '../helpers/passwordValidator'
import { configureFonts } from 'react-native-paper'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [newpassword, setNewPassword] = useState({ value: "", error: "" });
  const [confirmpassword, setConfirmPassword] = useState({value: "",error: "",});
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");




  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    const newpasswordError = passwordValidator(newpassword.value)
    const confirmpasswordError = passwordValidator(confirmpassword.value)

    if (emailError || newpasswordError || confirmpasswordError) {
      setEmail({ ...email, error: emailError })
      setNewPassword({...newpassword , error : newpassword})
      setConfirmPassword({...confirmpassword , error : confirmpassword})
      return
    }
    navigation.navigate('LoginScreen')
  }
  axios
      .post("http://192.168.0.108:5001/reset-password", {
        email: email.value,
        newpassword: newpassword.value,
        confirmpassword: confirmpassword.value,
      })
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        }
        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        if (error.response) {
          setDialogMessage(error.response.data.message);
          setDialogVisible(true);
        } else {
          console.error("Error:", error);
        }
      });
  

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Thay đổi mật khẩu</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <TextInput
        label="Mật khẩu mới"
        returnKeyType="done"
        value={newpassword.value}
        onChangeText={(text) => setNewPassword({ value: text, error: "" })}
        error={!!newpassword.error}
        errorText={newpassword.error}
        secureTextEntry
      />
      <TextInput
        label="Nhập lại mật khẩu"
        returnKeyType="done"
        value={confirmpassword.value}
        onChangeText={(text) => setConfirmPassword({ value: text, error: "" })}
        error={!!confirmpassword.error}
        errorText={confirmpassword.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  )
}
