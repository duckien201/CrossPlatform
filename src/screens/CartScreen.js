import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign'


export default function CartScreen({ route, navigation }) {
  const { item } = route.params;
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (productToAdd) => {
    const existingProduct = cartItems.find(item => item.id === productToAdd.id);
    if (existingProduct) {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === existingProduct.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    }
  };
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  // useEffect để cập nhật giỏ hàng khi có thay đổi trong cartItems
  useEffect(() => {
    if (item) {
      addToCart(item);
    }
  }, [item]);
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.img} />
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>Giá: {item.price} VNĐ</Text>
        <Text style={styles.quantity}>Số lượng:</Text>
        <View style={styles.quantitybox}>
          <Button title="-" onPress={() => decreaseQuantity(item.id)} style={styles.btn} />
          <Text style={{ fontSize: 16, marginHorizontal: 20 }}>{item.quantity}</Text>
          <Button title="+" onPress={() => increaseQuantity(item.id)} style={styles.btn} />
        </View>
      </View>
      <View style={styles.delete}>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Icons name='delete'
            size={25}
            color=' black'>

          </Icons>
        </TouchableOpacity>
      </View>
    </View>
  );

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
  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };


  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.header_icon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name='arrowleft'
              size={25}
              color=' black'>
            </Icons>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.header}>Giỏ hàng</Text>
        </View>
      </View>
      {cartItems.length === 0 ? (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 200 }}>
          <Icons name='frowno'
            size={25}
            color=' black'>

          </Icons>
          <Text style={{ fontSize: 24, margin: 20, alignItems: 'center', justifyContent: 'center' }}>Giỏ hàng của bạn còn trống.</Text>
        </View>

      ) : (
        <View style={styles.container}>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Tổng tiền: {formatNumberWithDot(calculateTotal())} VNĐ</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PayCart', { cartItems })} style={styles.checkoutButton} >
              <Text style={styles.checkoutText}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft : 100
  },
  header_icon: {
    marginTop: 50,
    marginLeft: 20
  },
  item: {
    backgroundColor: '#E5F3FE',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
  },
  img: {
    width: 120,
    height: 120
  },
  info: {
    marginLeft: 30,
    width: 150
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 14,
  },
  quantity: {
    fontSize: 14,
  },
  footer: {
    backgroundColor: '#ccc',
    padding: 20,
    alignItems: 'center',
  },
  total: {
    fontSize: 20,
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
  },
  quantitybox: {
    flexDirection: 'row',
    alignContent: 'space-between',
    width: 60,
  },
  btn: {
    height: 30,
    width: 50
  },
  delete: {
    marginTop: 55,
    marginRight: 50,
  }
});