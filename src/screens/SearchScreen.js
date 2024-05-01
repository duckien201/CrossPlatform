import { useEffect, useState } from 'react';
import { Text, TextInput, Image, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BackButton from '../components/BackButton'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { getProducts } from '../../apiServices';
export default function SearchProduct({ navigation }) {
    // const [products, setProducts] = useState([
    //     { id: '11', name: 'Quần jean demin phong cách', price: '200.000đ', image: require('../assets/images/quần jean/demin.png'), },
    //     { id: '12', name: 'Quần jean jocker dáng năng động', price: '300.000đ', image: require('../assets/images/quần jean/jean jocker.png') },
    //     { id: '13', name: 'Quần jean ngắn phong cách retro', price: '400.000đ', image: require('../assets/images/quần jean/jean ngắn 2.png') },
    //     { id: '14', name: 'Quần jean ngắn màu đen', price: '300.000đ', image: require('../assets/images/quần jean/jean ngắn.png') },
    //     { id: '15', name: 'Quần jean ống rộng', price: '200.000đ', image: require('../assets/images/quần jean/jean ống rộng.png'), },
    //     { id: '16', name: 'Quần jean phong cách retro', price: '300.000đ', image: require('../assets/images/quần jean/jean retro.png'), },
    //     { id: '17', name: 'Quần skiny jean màu đen', price: '150.000đ', image: require('../assets/images/quần jean/skinny jean.png'), },
    //     { id: '21', name: 'Áo phông dành cho boy phố', price: '1.000.000đ', image: require('../assets/images/áo phông/boi phố.png'), },
    //     { id: '22', name: 'Áo phông có cổ phối đen trắng', price: '150.000đ', image: require('../assets/images/áo phông/phông 1.png'), },
    //     { id: '23', name: 'Áo phông Dolce and Banana', price: '300.000', image: require('../assets/images/áo phông/phông 2.png'), },
    //     { id: '24', name: 'Áo phông Christian Dior', price: '200.000đ', image: require('../assets/images/áo phông/phông 3.png'), },
    //     { id: '25', name: 'Áo phông đại bàng', price: '200.200đ', image: require('../assets/images/áo phông/phông 4.png'), },
    //     { id: '26', name: 'Áo phông Walkup màu nâu', price: '200.200đ', image: require('../assets/images/áo phông/phông nâu.png'), },
    //     { id: '27', name: 'Áo phông có cổ phối xám đen ', price: '200.200đ', image: require('../assets/images/áo phông/phông xám.png'), },
    //     { id: '31', name: 'Áo hoodie nỉ đen dày dặn', price: '300.000đ', image: require('../assets/images/hoodie/đen.png') },
    //     { id: '32', name: 'Áo hoodie hồng dễ thương', price: '200.000đ', image: require('../assets/images/hoodie/hoodie hồng.png') },
    //     { id: '33', name: 'Áo hoodie xám phong cách retro', price: '540.000đ', image: require('../assets/images/hoodie/hoodie retro.png') },
    //     { id: '34', name: 'Áo hoodie xám basic', price: '250.000đ', image: require('../assets/images/hoodie/hoodie xám.png') },
    //     { id: '35', name: 'Áo hoodie xanh in chữ', price: '200.000đ', image: require('../assets/images/hoodie/hoodie xanh.png') },
    //     { id: '36', name: 'Áo hoodie nâu basic', price: '540.000đ', image: require('../assets/images/hoodie/nâu.png') },
    //     { id: '37', name: 'Áo hoodie xanh basic', price: '250.000đ', image: require('../assets/images/hoodie/xanh.png') },
    //     { id: '41', name: 'Áo sơ mi Cuban shirt', price: '300.000đ', image: require('../assets/images/sơ mi/cuban.png') },
    //     { id: '42', name: 'Áo flanel họa tiết caro', price: '200.000đ', image: require('../assets/images/sơ mi/flanel.png') },
    //     { id: '43', name: 'Áo sơ mi phối màu hồng trắng', price: '540.000đ', image: require('../assets/images/sơ mi/hồng.png') },
    //     { id: '44', name: 'Áo sơ mi cộc tay màu kem', price: '250.000đ', image: require('../assets/images/sơ mi/ngắn tay.png') },
    //     { id: '45', name: 'Áo sơ mi cộc tay họa tiết sọc xám ', price: '200.000đ', image: require('../assets/images/sơ mi/ngắn xám.png') },
    //     { id: '46', name: 'Áo sơ mi phối chữ trigger', price: '540.000đ', image: require('../assets/images/sơ mi/triger.png') },
    //     { id: '47', name: 'Áo sơ mi xám dài tay basic', price: '250.000đ', image: require('../assets/images/sơ mi/xám.png') }
    // ])
    const [products , setProducts]=useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const product = await getProducts();
                setProducts(product)
            }catch(error){
                console.log('error fetching data' , error)
            }
        }
        fetchData();
    } , [])

    const [searchProduct, setSearchProduct] = useState('')
    const filteredProduct = products.filter(eachProduct => {
        return eachProduct.name.toLowerCase()
            .includes(searchProduct.toLowerCase())
    })
    return (

        <View style={styles.container}>
            <BackButton goBack={navigation.goBack} />
            <View style={{
                marginHorizontal: 10,
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
            }}>

                <MaterialIcons name='search'
                    size={30}
                    color='black'
                    style={{
                        position: 'absolute',
                        top: 15,
                        right: 0,
                        marginTop : 13

                    }}>
                </MaterialIcons>
                <TextInput
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setSearchProduct(text)
                    }}
                    value={searchProduct}
                    placeholder="Tìm kiếm sản phẩm..."
                    style={{
                        height: 40,
                        flex: 1,
                        borderRadius: 5,
                        opacity: 0.8,
                        paddingStart: 30,
                        marginTop: 20,
                        borderWidth: 1,
                        backgroundColor: 'white',
                        marginHorizontal : 30 

                    }} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={filteredProduct}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate('DetailItem', { item })} style={styles.productItem}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    categoryItem: {
        marginBottom: 20,
    },
    category: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    productItem: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: 175,
        borderWidth: 1,
    },
    image: {
        width: 175,
        height: 175,
        padding: 10,
        margin: 5,
        marginTop: -11,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 15,
        color: 'red',
    }
})