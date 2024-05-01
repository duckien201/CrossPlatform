import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign'
export default function CheckoutScreen({ route, navigation }) {
  const { cartItems } = route.params;
  const [customerName, setCustomerName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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

  const handlePlaceOrder = () => {

    // Implement order processing logic here, potentially sending data to a server
    if (customerName.length === 0 || billingAddress.length === 0 || phoneNumber.length === 0) {
      alert(" bạn vui lòng nhập đầy đủ thông tin")
      return false;
    }
    Alert.alert('bạn đã đặt hàng thành công...');
    navigation.navigate('BillDetail', {cartItems, customerName, phoneNumber, billingAddress})
  };

  const renderOrderSummary = () => {
    return (
      <View style={styles.orderSummaryContainer}>
        <Text style={styles.orderSummaryTitle}>Thông tin đơn hàng</Text>
        <View style={styles.orderInfoContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={styles.orderInfoLabel}>Họ và tên:</Text>
            </View>
            <View>
              <Text style={styles.orderInfoValue}>{customerName}</Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={styles.orderInfoLabel}>Địa chỉ:</Text>
            </View>
            <View>
              <Text style={styles.orderInfoValue}>{billingAddress}</Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={styles.orderInfoLabel}>Số điện thoại:</Text>
            </View>
            <View>
              <Text style={styles.orderInfoValue}>{phoneNumber}</Text>
            </View>

          </View>

        </View>
        <View style={{
          justifyContent: "center",
          alignItems: 'center',
          marginBottom: 15,
        }}>
        </View>

        {cartItems.map(item => (
          <View key={item.id} style={styles.orderItem}>
            <View style={{flexDirection :'row'}}>
            <View style={{flex : 7}}>
              <Text style={styles.orderItemName}>{item.name}</Text>
              <Text style={styles.orderItemQuantity}>Số lượng: {item.quantity}</Text>
            </View>
            <View style={{}}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            </View>
            
            <Text style={styles.orderItemPrice}>Giá: {formatNumberWithDot(parseFloat(item.price.replace(/\./g, '')) * item.quantity)} VNĐ</Text>
          </View>
        ))}
        <View style={styles.orderTotal}>
          <Text style={styles.orderTotalLabel}>Tổng tiền:</Text>
          <Text style={styles.orderTotalValue}>{formatNumberWithDot(calculateTotal())} VNĐ</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{flex : 1}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name='arrowleft'
              size={25}
              color='black'>
            </Icons>
          </TouchableOpacity>
        </View>
          <View style={{flex : 6 , alignItems :'center'}}>
            <Image style={{
              width: 150, height: 80,
            }} source={require('../assets/images/logonew.png')} />
          </View>
        </View>
        <Text style={styles.header}>Thông tin thanh toán</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Họ và tên:</Text>
          <TextInput
            style={styles.infoInput}
            value={customerName}
            onChangeText={setName => setCustomerName(setName)}
            placeholder="Nhập họ và tên"
          />
          <Text style={styles.infoLabel}>Địa chỉ nhận hàng:</Text>
          <TextInput
            style={styles.infoInput}
            value={billingAddress}
            onChangeText={setAddress => setBillingAddress(setAddress)}
            placeholder="Nhập địa chỉ thanh toán"
          />
          <Text style={styles.infoLabel}>Số điện thoại:</Text>
          <TextInput
            style={styles.infoInput}
            value={phoneNumber}
            onChangeText={setPhone => setPhoneNumber(setPhone)}
            placeholder="Nhập số điện thoại"
            keyboardType="numeric" // Set keyboard type for phone numbers
          />
        </View>
        <View style={{
          justifyContent: "center",
          alignItems: 'center',
          marginBottom: 15,
        }}>
          <Text >---------------------------------------------------------------------</Text>
        </View>
        {renderOrderSummary()}
        <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
          <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
            <Text style={styles.placeOrderText}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F3FE',
  },
  body: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 25,
    color: 'green',


  },
  infoContainer: {
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  infoInput: {
    height: 44,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#21a3d0',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#000000',
  },
  orderSummaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  orderItem: {
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  orderItemName: {
    fontSize: 17,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft : 40,
    borderRadius : 10
  },
  orderItemQuantity: {
    fontSize: 17,
  },
  orderItemPrice: {
    fontSize: 14,
  },
  orderInfoValue: {
    fontSize: 17,
    marginHorizontal: 20,
    marginVertical: 3
  },
  orderInfoLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 3
  },
  orderTotal: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderTotalLabel: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  orderTotalValue: {
    fontSize: 20,
    color : 'red',
    fontWeight : 'bold'
  },
  placeOrderButton: {
    width: 150,
    justifyContent: 'center',
    textAlign: "center",
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  placeOrderText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});