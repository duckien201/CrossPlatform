import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import Button from '../components/Button'
import { useNavigation } from "@react-navigation/native";
export default function DetailItem({ route }) {
    const navigation = useNavigation()
    const { item } = route.params
    return (
        <View style={styles.container}>
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

                <View style={styles.description}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        ĐẶC ĐIỂM
                    </Text>
                    <FlatList
                        data={item.describe}
                        renderItem={({ item }) => <Text style={{ fontSize: 18}}>{item}</Text>}
                    />
                </View>
                <Button mode="contained" onPress={() => navigation.navigate('CartScreen', { item })}>
                        + GIỎ HÀNG
                    </Button>
                <View style={styles.line1}></View>



            </ScrollView>


        </View>
    )
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
        width: '60%',
        height: 70
    }
    ,
    imageheader: {
        flex: 5,
        alignItems: 'center',
        marginRight : 10
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