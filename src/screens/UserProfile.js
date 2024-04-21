import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesigns from "react-native-vector-icons/AntDesign"
import Button from '../components/Button'

const UserDetail = ({ navigation }) => {
    const onSignoutPressed = () => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        })
      }
    return <View style={styles.container}>

        <View style={styles.header1}>
            <View style={styles.buttonheader1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesigns name='leftcircleo'
                        size={30}
                        color='black'> </AntDesigns>
                </TouchableOpacity>
            </View>
            <Text style={styles.textHeader1}>Tài khoản của bạn</Text>
        </View>
        <View style={styles.line}></View>


        <View style={styles.imageContainer}>
            <View style={styles.imageProfile}>
                <Image source={require('../assets/images/list.jpg')} style={styles.imageProfile} />
            </View>
        </View>

        <View style={styles.body}>
            <View style={styles.bodyContent}>
                <Text style={styles.textContent}>Họ và tên :</Text>
                <Text style={styles.textContent1}> Đỗ Cao Cường</Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.bodyContent}>
                <Text style={styles.textContent}>Giới tính:</Text>
                <Text style={styles.textContent1}>Nam</Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.bodyContent}>
                <Text style={styles.textContent}>Số điện thoại:</Text>
                <Text style={styles.textContent1}>0385671234</Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.bodyContent}>
                <Text style={styles.textContent}>Ngày sinh:</Text>
                <Text style={styles.textContent1}>03/26/2003</Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.bodyContent}>
                <Text style={styles.textContent2}>Email</Text>
                <Text style={styles.bonusText}>(nếu có):</Text>
                <Text style={styles.textContent}></Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.bodyContent}>

                <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')}>
                    <Text style={styles.textContent3}>Thay đổi mật khẩu</Text>
                </TouchableOpacity>

                
            </View>
            <Button mode="contained" onPress={onSignoutPressed}>
                    Đăng xuất
                </Button>
        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    header1: {
        height: '200',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50
    },
    buttonheader1: {
        flex: 0.4,
        padding: 6
    },
    textHeader1: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold'
    },
    line: {
        width: '100%', // Chiều dài của đường thẳng
        height: 5, // Độ dày của đường thẳng
        backgroundColor: '#EEF3FC',
        marginTop: 5
    },
    imageContainer: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfile: {
        height: 130,
        width: 130,
        borderRadius: 70
    },
    body: {
        height: '50%',
        width: 'auto',
        marginTop: 10,
        marginHorizontal: 10,

    },
    bodyContent: {
        flexDirection: 'row',
        margin: 10
    },
    textContent: {
        flex: 2,
        fontSize: 18,
        fontWeight: 'bold'
    },
    textContent1: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold'
    },
    textContent2: {
        flex: 0,
        fontSize: 18,
        fontWeight: 'bold'
    },
    bonusText: {
        color: 'gray',
        fontSize: 17,
        fontWeight: 'bold'
    },
    textContent3: {
        fontSize: 18,
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        color: 'blue'
    }

})

export default UserDetail