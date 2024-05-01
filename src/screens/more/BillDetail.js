import React,{ useEffect, useState } from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Feather';
import Button from '../../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage';
const BillDetail = ({ navigation, route }) => {
    var date = new Date()
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

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
    var today = date.getDate() + '/' + (date.getMonth() + 1) + "/" + date.getFullYear()
    const { customerName, phoneNumber, billingAddress, cartItems } = route.params
    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            const priceInVND = parseFloat(item.price.replace(/\./g, ''));
            total += priceInVND * item.quantity;
        });
        return total;
    };

    const formatNumberWithDot = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <View style={styles.iconback}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icons name='arrowleft'
                            size={25}
                            color=' black'>
                        </Icons>
                    </TouchableOpacity>
                </View> */}
               
                    <Text style={styles.text}>
                        Chi tiết đơn hàng
                    </Text>
            </View>
            <View style={styles.line}></View>
            <ScrollView>
                <View style={styles.banner}>
                    <View style={styles.text_banner}>
                        {/* <Text style={{ color: 'white' }}>
                            Đơn hàng đã được hoàn thành
                        </Text> */}
                        <Text style={{ color: 'white' }}>
                            Cảm ơn bạn đã mua sắm tại CKVQ store
                        </Text>
                    </View>
                    <View style={styles.icon_banner}>
                        <Icons name='checkcircleo'
                            size={50}
                            color='white'>

                        </Icons>
                    </View>
                </View>
                <View >
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ marginLeft: 10 }}>
                            <Icon2 name='truck'
                                size={25}
                                color='black'>
                            </Icon2>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Thông tin vận chuyển
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text1}>
                            Nhanh
                        </Text>
                        <Text style={styles.text1}>
                            CK Express - CKXVN271873929719713
                        </Text>
                        <Text style={styles.text2}>
                            Đơn hàng đã được đặt
                        </Text>
                        <Text style={styles.text1}>
                            {today}
                        </Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ marginLeft: 10 }}>
                            <Icons name='enviromento'
                                size={25}
                                color='black'>
                            </Icons>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Thông tin nhận hàng
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                    <Text style={styles.text_infor}>
                            Tài khoản: {name}
                        </Text>
                        <Text style={styles.text_infor}>
                            Tên: {customerName}
                        </Text>
                        <Text style={styles.text_infor}>
                            Số điện thoại: {phoneNumber}
                        </Text>
                        <Text style={styles.text_infor}>
                            Địa chỉ: {billingAddress}
                        </Text>
                    </View>
                </View>

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10 }}>
                            <Icons name='wallet'
                                size={25}
                                color='black'>
                            </Icons>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Phương thức thanh toán
                            </Text>
                        </View>
                    </View>
                    <Text style={{ marginLeft: 30, marginTop: 5 }}>
                        Thanh toán khi nhận hàng
                    </Text>
                </View>
                <View style={styles.line}></View>

                {cartItems.map(item => (
                    <View key={item.id} style={{ marginTop: 5, justifyContent: 'space-between', paddingHorizontal: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={styles.orderItem}>{item.name}</Text>
                                <Text style={styles.orderItem}>Số lượng: {item.quantity}</Text>
                            </View>
                            <View style = {{ height : 100 }}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            
                            </View>
                        </View>

                        <Text style={styles.orderItem}>Giá: {formatNumberWithDot(parseFloat(item.price.replace(/\./g, '')) * item.quantity)} VNĐ</Text>
                    </View>
                ))}
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={styles.orderTotal}>Tổng tiền:</Text>
                    <Text style={styles.orderTotal}>{formatNumberWithDot(calculateTotal())} VNĐ</Text>
                </View>

                <View style={styles.chitiet}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                                Mã đơn hàng :
                            </Text>
                        </View>
                        <View style={styles.chitiet1_1}>
                            <Text style={styles.chitiet1}>
                                023940940284
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View >
                            <Text >
                                Thời gian đặt:
                            </Text>
                        </View>
                        <View style={styles.chitiet2}>
                            <Text >
                                {today}
                            </Text>

                        </View>
                    </View>
                </View>
                <Button mode="contained" onPress={() => navigation.navigate('HomeScreen')}>
                        Hoàn tất
                    </Button>
            </ScrollView>
        </View>
    </ScrollView>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginTop: 40,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
        alignSelf: 'center',
        marginTop: 20
    },
    item: {
        flexDirection: 'column',
        borderWidth: 0.5,
        borderRadius: 5,
        color: 'gray',
        marginTop: 15
    },
    item1: {
        marginTop: 20,
        flexDirection: 'row',
        height: 150,
        marginHorizontal: 10,
        marginVertical: 10,

    },
    image: {
        width : 100 ,
        height : 100,
        marginLeft : 50,
        borderRadius : 10
    },
    text_item: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 15
    },
    banner: {
        flexDirection: 'row',
        height: 100,
        backgroundColor: '#379C78'
    },
    icon_banner: {
        marginLeft: 20,
        marginTop: 20
    },
    text_banner: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    text1: {
        marginTop: 10,
        marginLeft: 10,
    },
    text2: {
        marginTop: 10,
        marginLeft: 10,
        color: 'green'
    },
    text_infor:{
        marginTop: 10,
        marginLeft: 10,
        fontSize : 16
    },
    orderItem:{
        marginTop: 10,
        marginLeft: 10,
        fontSize : 16
    },
    orderTotal:{
        fontSize:18 ,
        color : "red"
    },
    chitiet: {
        flexDirection: 'column',
        marginHorizontal: 20,
        marginVertical: 10
    },
    chitiet1: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    chitiet1_1: {
        position: 'absolute',
        right: 0
    },
    chitiet2: {
        position: 'absolute',
        right: 0
    }


})

export default BillDetail