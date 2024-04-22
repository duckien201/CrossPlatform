import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { Categories, COLOURS } from '../data/Constant';
import { StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import {products} from '../data/Products';

const Home = ({ navigation }) => {
  const [currentSelected, setCurrentSelected] = useState([0]);

  const renderCategories = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}>
        <View
          style={{
            width: 120,
            height: 50,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor:
              currentSelected == index ? COLOURS.accent : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}>
          <Text
            style={styles.text1}>
            {item.category}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItems = (item, index) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={styles.item}
        onPress={() =>
          navigation.navigate('DetailItem', {item})
        }>
        <View style={styles.box}>
          <View style={{ marginBottom: 50, flex: 3 }}>
            <Text
              style={styles.name_text}>
              {item.name}
            </Text>

          </View>
          <View style={{ width: 150, height: 150, flex: 1 }}>
            <Image
              source={{ uri: item.image }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 20
              }}
            />
          </View>
          <View style={styles.box_price}>
            <View style={styles.box_price1}>
              <Text style={{ fontSize: 15, fontWeight: '700', color: 'red' }}>
                {item.price}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: COLOURS.white,
    }}
    >
      <View style={styles.iconback}>
        <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name='arrowleft'
            size={25}
            color=' black'>
          </Icons>
        </TouchableOpacity>
        </View>
        <View >
          <Text style={styles.text}>
            Phân loại
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.text_header}>
          {/* <Text style={styles.text_category}>
            Phân loại
          </Text> */}
          <FlatList
            horizontal={true}
            data={products}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.text_popular}>
            Bán chạy
          </Text>

          {products[currentSelected].products.map(renderItems)}
          <TouchableOpacity
            style={{
              margin: 30,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.5,
            }}>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text1: {
    fontSize: 16,
    color: COLOURS.black,
    fontWeight: '600',
  },
  item: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    height: 160,
    backgroundColor: COLOURS.white,
    borderRadius: 20,
    elevation: 4,
    position: 'relative',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name_text: {
    fontSize: 22,
    color: COLOURS.black,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  box_price: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box_price1: {
    width: 150,
    height: 50,
    backgroundColor: COLOURS.accent,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_header: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
    position: 'relative',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: COLOURS.black,
    letterSpacing: 1,
    marginLeft : 100
  },
  text_popular: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '700',
    color: COLOURS.black,
  },
  iconback: {
    flexDirection:'row',
    marginHorizontal: 20,
    marginVertical: 30
  }
})