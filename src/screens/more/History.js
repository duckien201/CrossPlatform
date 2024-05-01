import React from 'react'
import { Image } from 'react-native'
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
const History = ({ navigation, route }) => {

    const { customerName, phoneNumber, billingAddress, cartItems } = route.params
    const [savedCartItems, setSavedCartItems] = useState([]);

    useEffect(() => {
        // Load saved cart items when the component mounts
        loadSavedCartItems();
    }, []);
    useEffect(() => {
        // Save cart items whenever it changes
        saveCartItems();
    }, [savedCartItems]);

    const loadSavedCartItems = async () => {
        try {
            const savedItems = await AsyncStorage.getItem('cartItems');
            if (savedItems !== null) {
                setSavedCartItems(JSON.parse(savedItems));
            }
        } catch (error) {
            console.error('Error loading saved cart items:', error);
        }
    };
    const saveCartItems = async () => {
        try {
            await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
        } catch (error) {
            console.error('Error saving cart items:', error);
        }
    };
    const calculateTotal = (items) => {
        let total = 0;
        items.forEach(item => {
            const priceInVND = parseFloat(item.price.replace(/\./g, ''));
            total += priceInVND * item.quantity;
        });
        return total;
    };

    const formatNumberWithDot = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    return <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.iconback}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <Icons name='arrowleft'
                        size={25}
                        color=' black'>

                    </Icons>
                </TouchableOpacity>
            </View>
            <View style={styles.header_text}>
                <Text style={styles.text}>
                    Lịch sử mua hàng
                </Text>
            </View>



        </View>
        <View style={styles.line}></View>
        {cartItems.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Icons name='frowno' size={25} color='black' />
                    <Text style={styles.emptyText}>Chưa có đơn hàng nào.</Text>
                </View>
            ) :(

        <ScrollView>
            <TouchableOpacity onPress={() => {
                navigation.navigate('BillDetail',{cartItems,customerName,phoneNumber,billingAddress})
            }}>
                <View style={styles.item}>
                    {cartItems.map(item => (
                        <View key={item.id} style={{ marginTop: 5, justifyContent: 'space-between', paddingHorizontal: 5 }}>
                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ height: 120 }} >
                                    <Image source={{ uri: item.image }} style={styles.image} />
                                </View>
                                <View>
                                    <Text style={styles.orderItem}>{item.name}</Text>
                                    <Text style={styles.orderItem}>Số lượng: {item.quantity}</Text>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                        <Text style={styles.orderTotal}>Tổng tiền:</Text>
                                        <Text style={styles.orderTotal}>{formatNumberWithDot(calculateTotal(cartItems))} VNĐ</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    ))}

                    <View style={styles.trangthai}>
                        <View>
                            <Icons name='checkcircleo'
                                size={20}
                                color='green'>

                            </Icons>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'green' }}>
                                Giao hàng thành công
                            </Text>
                        </View>

                    </View>


                </View>

            </TouchableOpacity>

        </ScrollView>
            )}
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row'
    },
    iconback: {
        marginHorizontal: 20,
        marginTop: 40
    },
    header_text: {
        marginTop: 40,
        marginLeft: 55
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
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
    item_img: {
        flex: 0.75,
        borderRadius: 10

    },
    item_des: {
        flex: 1,
    },
    image: {
        width: 100,
        height: 100,
        marginHorizontal: 30,
        marginTop: 10
    },
    trangthai: {
        flexDirection: 'row',
        marginLeft: 10
    },
    orderItem:{
        fontSize : 17
    },
    orderTotal:{
        fontSize :18,
        marginTop : 30,
        color:'red'
    }

})

export default History