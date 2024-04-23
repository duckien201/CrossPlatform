import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import axios from 'axios'
import { useEffect , useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {

    const [userData , setUserData] = useState("")

    const getUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData !== null) {
                return JSON.parse(userData);
            }
            return null;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin người dùng:', error);
            throw error;
        }
    }; 

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const userData = await getUserData();
            if (userData) {
                setUserData(userData);
            }
        } catch (error) {
            console.error('Lỗi khi lấy thông tin người dùng:', error);
        }
    };
    return <View style={styles.container}>

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
                <Text style={styles.textProfile}>{userData.name}</Text>

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

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header1: {
        marginTop:25,
        flexDirection: 'row',
        height: 75
    },
    image: {
        flex: 1,
        alignItems: 'flex-start',
        height: 75,
        width: 75
    },
    iconNotifications: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight : 30

    },
    header2: {
        width: 'auto',
        marginTop: 10
    },
    line: {
        width: '50%', 
        height: 2,
        backgroundColor: 'black', 
        alignSelf: 'center',
    },
    line1:{
        width: '100%', 
        height: 0.5,
        backgroundColor: 'gray', 
        marginTop : 10
    },
    containerheader2: {
        flexDirection: "row",
        marginTop: 10
    },
    textHeader2: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imageProfile: {
        marginLeft: 10,
        height: 80,
        width: 80,
        borderRadius: 50
    },
    textProfile: {
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 50,
        fontSize: 20,
        fontWeight: 'bold'
    },
    lineBody: {
        marginBottom: 15,
        width: '100%', // Chiều dài của đường thẳng
        height: 3, // Độ dày của đường thẳng
        backgroundColor: '#EEF3FC', // Màu sắc của đường thẳng
        alignSelf: 'center', // Căn giữa đường thẳng
    },
    bodyProfile: {
        width: 'auto',
        padding: 20,
        marginHorizontal: 10


    },
    history: {
        flexDirection: 'row',
        marginBottom: 10
    },
    textHistory: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 25
    },
    bodyButtonRight: {
        paddingLeft: '37%'
    },
    bodyButtonRight1: {
        paddingLeft: "40%"
    },

    footer: {
        flexDirection: 'row',
        backgroundColor: '#E5F3FE',
        height: '10%',
        borderWidth : 0.5,
        color :'gray'
        
    },
    footer_icon1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer_icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Profile