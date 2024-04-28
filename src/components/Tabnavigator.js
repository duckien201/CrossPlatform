import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/AntDesign'
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Tabnavigator () {
  return (
      <Tab.Navigator
      initialRouteName="Trang chủ"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <Icons name='home'
                    size={size}
                    color={color}>

                </Icons>
          ),
        }}
      /> 
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Giỏ hàng',
          tabBarIcon: ({ color, size }) => (
            <Icons name='shoppingcart'
                    size={size}
                    color={color}>

                </Icons>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Trang cá nhân',
          tabBarIcon: ({ color, size }) => (
            <Icons name='user'
                    size={size}
                    color={color}>

                </Icons>
          ),
        }}
      />
    </Tab.Navigator>
  );
};