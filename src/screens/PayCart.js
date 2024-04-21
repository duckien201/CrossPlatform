import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PayCart = ({ navigation }) => {
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [shippingMethod, setShippingMethod] = useState('');

    const handleSelectPaymentMethod = (method) => {
        setPaymentMethod(method);
    };

    const handleSelectShippingMethod = (method) => {
        setShippingMethod(method);
    };

    const handlePayment = () => {
        navigation.navigate('....');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Thông tin thanh toán</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Địa chỉ giao hàng"
                    value={address}
                    onChangeText={text => setAddress(text)}
                />
                <Text style={styles.paymentTitle}>Phương thức thanh toán</Text>
                <TouchableOpacity style={styles.paymentOption} onPress={() => handleSelectPaymentMethod('credit_card')}>
                    <MaterialIcons name={paymentMethod === 'credit_card' ? 'radio-button-checked' : 'radio-button-unchecked'} size={24} color="black" />
                    <Text style={styles.paymentOptionText}>Thẻ tín dụng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentOption} onPress={() => handleSelectPaymentMethod('paypal')}>
                    <MaterialIcons name={paymentMethod === 'paypal' ? 'radio-button-checked' : 'radio-button-unchecked'} size={24} color="black" />
                    <Text style={styles.paymentOptionText}>PayPal</Text>
                </TouchableOpacity>
                <Text style={styles.shippingTitle}>Phương thức vận chuyển</Text>
                <TouchableOpacity style={styles.shippingOption} onPress={() => handleSelectShippingMethod('standard')}>
                    <MaterialIcons name={shippingMethod === 'standard' ? 'radio-button-checked' : 'radio-button-unchecked'} size={24} color="black" />
                    <Text style={styles.shippingOptionText}>Vận chuyển tiêu chuẩn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shippingOption} onPress={() => handleSelectShippingMethod('express')}>
                    <MaterialIcons name={shippingMethod === 'express' ? 'radio-button-checked' : 'radio-button-unchecked'} size={24} color="black" />
                    <Text style={styles.shippingOptionText}>Vận chuyển nhanh</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePayment}>
                <Text style={styles.buttonText}>Xác nhận thanh toán</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: 'flex-end', 
    },
    content: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    paymentTitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    paymentOptionText: {
        marginLeft: 10,
    },
    shippingTitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    shippingOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    shippingOptionText: {
        marginLeft: 10,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default PayCart;
