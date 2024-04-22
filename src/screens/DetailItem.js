import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView , FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import Products from '../data/Products';
const DetailItem = ({navigation , route}) => {
    const { item } = route.params
    return <View style={styles.container}>
        <View style={styles.header1}>
            <View style={styles.iconback}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icons name='arrowleft'
                    size={25}
                    color=' black'>
                </Icons>
                </TouchableOpacity>
            </View>
            <View style={styles.imageheader}>
                <Image source={require('../assets/images/logonew.png')} resizeMode='cover' style={styles.image1} />
            </View>
            <View style={styles.iconcart}>
                <TouchableOpacity onPress={() => {
            navigation.navigate('CartScreen', { title: "màn hình giỏ hàng" })
        }}>
                <Icons name='shoppingcart'
                    size={25}
                    color=' black'>

                </Icons>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.line}></View>

        <ScrollView>
            <View style={{ height: 400 }}>
                    
                        <View style={styles.image_list}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                        </View>
            </View>

            <View style={styles.title}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                    {item.name}
                </Text>
            </View>
  
                    <View style={styles.text}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'red' }}>
                            {item.price}
                        </Text>
                    </View>

            <View style={{ flexDirection: 'row', height: 80, backgroundColor: '#E5F3FE' }}>
                <TouchableOpacity onPress={() => {
            navigation.navigate('CartScreen', { title: "màn hình giỏ hàng" })
        }} >
                <View style={styles.themgiohang}>
                    <Text style={{ textAlign: 'center', marginTop: 8, color: '#6945D6', fontWeight: 'bold' }}>
                        + GIỎ HÀNG
                    </Text>
                </View>
                </TouchableOpacity>

                <View style={styles.muangay}>
                    <Text style={{ textAlign: 'center', marginTop: 8, color: 'white', fontWeight: 'bold' }}>
                        MUA NGAY
                    </Text>
                </View>
            </View>

            <View style={styles.description}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    ĐẶC ĐIỂM
                </Text>
                <FlatList
                        data={item.describe}
                        renderItem={({ item }) => <Text>{item}</Text>}
                    />
            </View>

            <View style={styles.line1}></View>

            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                CÁC SẢN PHẨM TƯƠNG TỰ
            </Text>

            <View style={styles.all}>
                <View style={styles.all_item_1}>
                    <Image source={require('../assets/images/list.jpg')} style={styles.image2} />

                    <View style={styles.textitem_1}>
                        <View style={{ marginHorizontal: 10, marginVertical: 8 }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Áo cộc
                            </Text>
                        </View>
                        <View style={{ marginVertical: 8, marginLeft: 15 }}>
                            <Text>
                                50.000
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 5 }}>
                            <Text>
                                Tinh trang :
                            </Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text>
                                99%
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.all_item_1}>
                    <Image source={require('../assets/images/list.jpg')} style={styles.image2} />

                    <View style={styles.textitem_1}>
                        <View style={{ marginHorizontal: 10, marginVertical: 8 }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Áo cộc
                            </Text>
                        </View>
                        <View style={{ marginVertical: 8, marginLeft: 15 }}>
                            <Text>
                                50.000
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 5 }}>
                            <Text>
                                Tinh trang :
                            </Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text>
                                99%
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.all}>
                <View style={styles.all_item_1}>
                    <Image source={require('../assets/images/list.jpg')} style={styles.image2} />

                    <View style={styles.textitem_1}>
                        <View style={{ marginHorizontal: 10, marginVertical: 8 }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Áo cộc
                            </Text>
                        </View>
                        <View style={{ marginVertical: 8, marginLeft: 15 }}>
                            <Text>
                                50.000
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 5 }}>
                            <Text>
                                Tinh trang :
                            </Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text>
                                99%
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.all_item_1}>
                    <Image source={require('../assets/images/list.jpg')} style={styles.image2} />

                    <View style={styles.textitem_1}>
                        <View style={{ marginHorizontal: 10, marginVertical: 8 }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Áo cộc
                            </Text>
                        </View>
                        <View style={{ marginVertical: 8, marginLeft: 15 }}>
                            <Text>
                                50.000
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 5 }}>
                            <Text>
                                Tinh trang :
                            </Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text>
                                99%
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.all}>
                <View style={styles.all_item_1}>
                    <Image source={require('../assets/images/list.jpg')} style={styles.image2} />

                    <View style={styles.textitem_1}>
                        <View style={{ marginHorizontal: 10, marginVertical: 8 }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Áo cộc
                            </Text>
                        </View>
                        <View style={{ marginVertical: 8, marginLeft: 15 }}>
                            <Text>
                                50.000
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 5 }}>
                            <Text>
                                Tinh trang :
                            </Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text>
                                99%
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.all_item_1}>
                    <Image source={require('../assets/images/list.jpg')} style={styles.image2} />

                    <View style={styles.textitem_1}>
                        <View style={{ marginHorizontal: 10, marginVertical: 8 }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Áo cộc
                            </Text>
                        </View>
                        <View style={{ marginVertical: 8, marginLeft: 15 }}>
                            <Text>
                                50.000
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 5 }}>
                            <Text>
                                Tinh trang :
                            </Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text>
                                99%
                            </Text>
                        </View>
                    </View>
                </View>
            </View>


        </ScrollView>


    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header1: {
        flexDirection: 'row',
        marginTop: 25,
        height: 80,

    },
    image2: {
        width: 'auto',
        height: '70%'
    },
    image1: {
        width: '75%',
        height: 80
    }
    ,
    imageheader: {
        flex: 3.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconback: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconcart: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
        alignSelf: 'center',
    },
    line1: {
        width: '70%',
        height: 1,
        backgroundColor: 'gray',
        alignSelf: 'center',
    }
    ,
    newitem_1: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    }
    ,
    image_list: {
        width: "100%",
        height: 400,
        backgroundColor: 'blue',
        
    },
    image: {
        width: "100%",
        height: 400,
    },
    title: {
        marginTop: 15,
        marginLeft: 20
    },
    text: {
        marginLeft: 20,
        marginTop: 5
    },
    yeuthich: {
        width: 100,
        height: 30,
        marginLeft: 30,
        marginTop: 5
    },
    themgiohang: {
        height: 40,
        width: 120,
        marginHorizontal: 53,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#6945D6'

    },
    muangay: {
        backgroundColor: 'red',
        height: 40,
        width: 120,
        marginVertical: 20
    },
    description: {
        backgroundColor: '#E5F3FE',
        marginVertical: 10,
        marginHorizontal: 10
    },
    all: {
        flexDirection: 'row',
        marginTop: 20
    },
    textitem_1: {
        flexDirection: 'row'
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
    }

})

export default DetailItem