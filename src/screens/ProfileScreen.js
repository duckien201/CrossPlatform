import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const onSignoutPressed = async () => {

    await AsyncStorage.removeItem("token")
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    })
  }
  const handleEditProfile = () => {

    console.log('Thông tin đã được lưu:', { name, email, phone });
    // Hiển thị thông báo hoặc thực hiện các thao tác khác ở đây
    setIsEditing(false); // Kết thúc chế độ chỉnh sửa
  };

  const handleChangePassword = () => {
    navigation.navigate('ChangePasswordScreen');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const user = JSON.parse(userData);
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
      }
    }
    fetchUserData()
  }, [])

  return (
    <>
      <View style={styles.container}>

        <View style={styles.header1}>
          <Image source={require('../assets/images/logonew.png')} style={styles.image} />

          <View style={styles.iconNotifications}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('ThongBao', { title: "màn hình thông báo" })
            }}>
              <Ionicons name='notifications'
                size={30}
                color='black'></Ionicons>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.header2}>
          <View>
            <Text style={styles.textHeader2}>Hồ sơ người dùng</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.containerheader2}>

            <Image source={require('../assets/images/list.jpg')} style={styles.imageProfile} />
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={text => {
                if (isEditing) setName(text);
              }}
              editable={isEditing}
            />

          </View>
        </View>

        <View style={styles.line1}></View>

        <View style={styles.bodyProfile}>
          <View style={styles.bodyContent}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('History', { title: "màn hình lịch sử đơn hàng" })
            }}>
              <View style={styles.history}>
                <View style={styles.iconHistory}>
                  <FontAwesome name="history"
                    size={30}
                    color="black"> </FontAwesome>
                </View>

                <Text style={styles.textHistory}>Lịch sử đơn hàng</Text>

                <View style={styles.bodyButtonRight}>
                  <FontAwesome name="angle-right"
                    size={40}
                    color="black"> </FontAwesome>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.lineBody}></View>
            <TouchableOpacity onPress={() => {
              navigation.navigate('DanhGia', { title: "màn hình đánh giá đơn hàng" })
            }}>
              <View style={styles.history}>
                <View style={styles.iconHistory}>
                  <MaterialIcons name="star-rate"
                    size={30}
                    color="black"> </MaterialIcons>
                </View>

                <Text style={styles.textHistory}>Đánh giá của tôi</Text>

                <View style={styles.bodyButtonRight1}>
                  <FontAwesome name="angle-right"
                    size={40}
                    color="black"> </FontAwesome>
                </View>
                <View style={styles.line1}></View>
              </View>
            </TouchableOpacity>

            <View style={styles.lineBody}></View>
            <TouchableOpacity onPress={() => {
              navigation.navigate('UserProfile', { title: "màn hình chi tiết tài khoản" })
            }}>
              <View style={styles.history}>
                <View style={styles.iconHistory}>
                  <Ionicons name="settings"
                    size={30}
                    color="black"> </Ionicons>
                </View>

                <Text style={styles.textHistory}>Cài đặt tài khoản</Text>

                <View style={styles.bodyButtonRight}>
                  <FontAwesome name="angle-right"
                    size={40}
                    color="black"> </FontAwesome>
                </View>
                <View style={styles.line1}></View>
              </View>
            </TouchableOpacity>
            <View style={styles.lineBody}></View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileInfo: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  editButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  changePasswordButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  changePasswordButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  logoutButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});