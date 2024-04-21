import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
const History = ({ navigation }) => {
    return <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.iconback}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
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
        <ScrollView>
        <TouchableOpacity onPress={() => {
                    navigation.navigate('BillDetail', { title: "màn hình chi tiết đơn hàng " })
                }}>
            <View style={styles.item}>
                <View style={styles.item1}>
                    <View style={styles.item_img}>
                        <Image source={require('../../assets/images/list.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.item_des}>
                        <Text style={styles.text_item}>
                            Áo phông
                        </Text>
                        <Text style={styles.text_item}>
                            Brand : tokyo life
                        </Text>
                        <Text style={styles.text_item}>
                            size : XL
                        </Text>
                        <Text style={styles.price}>
                            50.000đ
                        </Text>
                    </View>
                </View>
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
        width: 'auto',
        height: '80%',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10
    },
    text_item: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 15
    },
    price: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center'
    },
    trangthai: {
        flexDirection: 'row',
        marginLeft: 10
    }


})

export default History