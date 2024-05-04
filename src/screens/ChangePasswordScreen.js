import React, { useState , useEffect } from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import Icons from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changePassword } from '../../apiServices';
export default function ChangePasswordScreen({navigation}) {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [entercurrentPassword, setEnterCurrentPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
          const userData = await AsyncStorage.getItem("user");
          if (userData) {
            const user = JSON.parse(userData);
            setCurrentPassword(user.password)
          }
        }
        fetchUserData()
      }, [])

    const handleChangePassword = async() => {
        if (!entercurrentPassword || !newPassword || !confirmNewPassword) {
            setError('Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setError('Mật khẩu mới và xác nhận mật khẩu không khớp.');
            return;
        }
        try{
            const userData = await AsyncStorage.getItem('user');
            const user = JSON.parse(userData);
            const response = await changePassword(
                user.email,
                entercurrentPassword,
                newPassword
            )
            console.log(response)
            
            if (response && response.message === "Password change successfully"){
                setCurrentPassword('');
                setNewPassword('');
                setConfirmNewPassword('');
        
                setError('Mật khẩu đã được thay đổi thành công.');
            }else{
                alert(response.message);
              }
            }catch(error){
              alert(error,message)
              
            }
    };

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <View style={styles.iconback}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icons name='arrowleft'
                            size={25}
                            color='black'>
                        </Icons>
                    </TouchableOpacity>
                </View>
            <View style={styles.text_header}>
            <Header>Đổi mật khẩu</Header>
            </View>
            
            </View>
            
            <Text style={styles.label}>Mật khẩu hiện tại:</Text>
            <TextInput
                style={styles.input}
                value={entercurrentPassword}
                onChangeText={setEnterCurrentPassword}
                secureTextEntry={true}
            />
            <Text style={styles.label}>Mật khẩu mới:</Text>
            <TextInput
                style={styles.input}
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={true}
            />
            <Text style={styles.label}>Xác nhận mật khẩu mới:</Text>
            <TextInput
                style={styles.input}
                value={confirmNewPassword}
                onChangeText={setConfirmNewPassword}
                secureTextEntry={true}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button mode="contained" onPress={handleChangePassword}>Thay đổi mật khẩu</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    iconback:{
        marginTop : 15
    },
    text_header:{
        marginLeft : 90
    }
});