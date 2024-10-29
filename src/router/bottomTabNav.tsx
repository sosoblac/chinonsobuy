import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';


const Tab = createBottomTabNavigator()

const BottomTabNav = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel:false,
        tabBarInactiveTintColor:'#ffbd7d',
        tabBarActiveTintColor:'#e47911',
        headerShown:false
    }}>
        <Tab.Screen 
        component={HomeStack} 
        name='Home'
        options={{
            tabBarIcon:({color})=>(
                <Entypo name='home' color={color} size={19}/>
            )
        }}/>
        <Tab.Screen 
        component={HomeScreen} 
        name='Profile'
        options={{
            tabBarIcon:({color})=>(
                <Entypo name='user' color={color} size={19}/>
            )
        }}/>
        <Tab.Screen 
        component={ShoppingCartStack} 
        name='ShoppingCart'
        options={{
            tabBarIcon:({color})=>(
                <Entypo name='shopping-cart' color={color} size={19}/>
            )
        }}/>
        <Tab.Screen 
        component={HomeScreen} 
        name='more'
        options={{
            tabBarIcon:({color})=>(
                <Entypo name='menu' color={color} size={19}/>
            )
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNav

const styles = StyleSheet.create({})