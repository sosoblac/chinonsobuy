import { StyleSheet, Text, View ,SafeAreaView,TextInput} from 'react-native'
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import BottomTabNav from './bottomTabNav';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import Feather from 'react-native-vector-icons/Feather'

const Stack = createStackNavigator()
interface HeaderComponentProps{
    searchValue:string,
    setSearchValue:()=>void
}
const HeaderComponent = ({searchValue,setSearchValue}:HeaderComponentProps)=>{
    return(
        <SafeAreaView style={{backgroundColor:'#22e3dd'}}>
            <View style={{
                backgroundColor:'white',
                margin:10,
                padding:5,
                flexDirection:'row',
                alignItems:'center'
                }}>
                    <Feather name='search' size={20}/>
                <TextInput 
                style={{height:40}}
                placeholder='Search...'
                value={searchValue}
                onChangeText={setSearchValue}/>
            </View>
        </SafeAreaView>
    )
}

const HomeStack = () => {
    const [searchValue, setSearchValue] = useState('')
  return (
    <Stack.Navigator 
    screenOptions={{
        header:()=> 
        <HeaderComponent 
        searchValue ={searchValue} 
        setSearchValue={setSearchValue}/>
    }}>
        <Stack.Screen name='HomeScreen'
        options={{title:'Home'}}>
            {()=><HomeScreen searchValue = {searchValue}/>}
        </Stack.Screen>
        <Stack.Screen component={ProductScreen} name='ProductDetails'/>
    </Stack.Navigator>

)
}

export default HomeStack

const styles = StyleSheet.create({})