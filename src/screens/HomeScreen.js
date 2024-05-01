import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Entypo'
import Products from '../data/Products';

const HomeScreen = ({ navigation }) => {
    return <View style={styles.container}>

        <View style={styles.header1}>

            <View style={styles.box_search}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SearchScreen', { title: "màn hình tim kiem" })
                }}>
                    <View style={styles.search}>
                        <Text style={styles.input}>
                            Tìm kiếm sản phẩm
                        </Text>

                        <View style={styles.search_icon}>
                            <TouchableOpacity>
                                <MaterialIcons name='search'
                                    size={25}
                                    color='black'>
                                </MaterialIcons>
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.header_icon1}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ThongBao', { title: "màn hình thông báo" })
                }}>
                    <Icon1 name='bell'
                        size={25}
                        color='black'>

                    </Icon1>
                </TouchableOpacity>
            </View>

            <View style={styles.header_icon1}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('TinNhan', { title: "màn hình tin nhắn" })
                }}>
                    <Icons name='message1'
                        size={25}
                        color='black'>

                    </Icons>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ marginLeft: 20, marginTop: 20, flexDirection: 'row' }}>

            <View style={styles.box_header}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', }}>
                        Tất cả các sản phẩm
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.box_header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Categoris')
                }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' , textAlign:'center'}}>
                        Phân Loại
                    </Text>
                </TouchableOpacity>
            </View>


        </View>

        <Products />


    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header1: {
        flexDirection: 'row',
        marginTop: 25

    },
    header2: {
        flexDirection: 'row',
        backgroundColor: '#E5F3FE',
        height: 70
    },
    box_search: {
        flex: 5,
    },
    header_icon1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        marginLeft: 40,
        borderWidth: 1,
        borderRadius: 5

    },
    input: {
        marginLeft: 5,
        marginVertical: 8
    },
    search_icon: {
        position: 'absolute',
        right: 0,

    },
    header_text: {
        fontSize: 12
    },
    header_maintext: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue'
    },
    text_hangmoi: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    text_hangmoi_1: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    newitem_1: {
        width: 150,
        height: 200,
        borderRadius: 10,
        borderColor: 'gray',
        marginLeft: 15,
        borderWidth: 1,
        marginLeft: 20
    },
    all: {
        flexDirection: 'row',
        marginTop: 20
    }
    ,
    image: {
        width: 'auto',
        height: '70%'
    },
    textitem_1: {
        flexDirection: 'row'
    },
    text1: {
        marginHorizontal: 20
    },
    text1_1: {
        backgroundColor: '#E5F3FE',
        width: 150,
        height: 30,
        marginLeft: 50,
        marginTop: 10
    },
    all_item_icon: {
        marginLeft: 30
    },
    all_item: {
        width: 80,
        height: 30,
        backgroundColor: '#E5F3FE',
        marginLeft: 20,
        borderRadius: 10
    },
    all_item_text: {
        textAlign: 'center',
        marginTop: 3
    },
    all_item_1: {
        width: 150,
        height: 200,
        borderRadius: 10,
        borderColor: 'gray',
        marginLeft: 15,
        borderWidth: 1,
        marginLeft: 40
    },
    box_header: {
        flex: 1,
        height: 40,
        backgroundColor: '#E5F3FE',
        marginHorizontal: 10
    }

})

export default HomeScreen