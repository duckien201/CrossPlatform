import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo'
const DanhGia = ({ navigation }) => {
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
                Đánh giá của bạn 
                </Text>
            </View>
            
            

        </View>
        <View style={styles.line}></View>

        <View style={styles.icon}>
        <Icons name='staro'
                        size={100}
                        color='#437DD4'
                        >

                    </Icons>
        </View>
        <View style={styles.text1}>
            <Text style={{color :'gray'}} >
                Hiện chưa có đánh giá nào 
            </Text>
        </View>


    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row'
    },
    iconback:{
        marginHorizontal : 20,
        marginTop : 40
    },
    header_text:{
        marginTop : 40,
        marginLeft : 60
    },
    text:{
        textAlign:'center',
        fontSize : 20,
        fontWeight : 'bold'
    },
    line:{
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    alignSelf: 'center',
    marginTop : 20
    },
    icon:{
        alignItems:'center',
        marginTop :150
    },
    text1:{
        alignItems : 'center',
        marginTop : 10
    }
})

export default DanhGia