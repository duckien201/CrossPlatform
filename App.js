import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  PayCart,
} from './src/screens'
import Products from './src/data/Products'
import DetailItem from './src/screens/DetailItem'
import HomeScreen from './src/screens/HomeScreen'
import Tabnavigator from './src/components/Tabnavigator'
import SearchScreen from './src/screens/SearchScreen'
import CartScreen from './src/screens/CartScreen'
import Profile from './src/screens/Profile'
import UserProfile from './src/screens/UserProfile'
import History from './src/screens/more/History'
import DanhGia from './src/screens/more/DanhGia'
import ThongBao from './src/screens/more/ThongBao'
import BillDetail from './src/screens/more/BillDetail'
import TinNhan from './src/screens/more/TinNhan'
import Category from './src/components/Category'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={Tabnavigator} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="Categoris" component={Category} />
          <Stack.Screen name="DetailItem" component={DetailItem} /> 
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="DanhGia" component={DanhGia} />
          <Stack.Screen name="ThongBao" component={ThongBao} />
          <Stack.Screen name="BillDetail" component={BillDetail} />
          <Stack.Screen name="TinNhan" component={TinNhan} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="PayCart" component={PayCart} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}