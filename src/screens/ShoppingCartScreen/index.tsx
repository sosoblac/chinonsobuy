import { View, StyleSheet,FlatList,Text, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';
import Button from '../../components/Button';

const ShoppingCartScreen = () => {
  const navigation = useNavigation<any>();

  const totalPrice = products.reduce(
    (summedPrice,product)=>
    summedPrice + product.item.price + product.quantity
  ,0);

  const onCheckout = ()=>{
    navigation.navigate('Address')
  }
  return (
    <View style={styles.page}>
      
      {/* Render product component */}
      <FlatList
      ListHeaderComponent={()=>(
        <View>
        <Text style={{fontSize:18}}> 
          SubTotal ({products.length} items):{' '}
          <Text style={{color:'#e47911',fontWeight:'bold'}}>
          ₦{totalPrice.toFixed(2)} 
          </Text>
        </Text>
        <Button 
        text ='Proceed to checkout' 
        onPress={onCheckout}
        containerStyles={{backgroundColor:'#f7e300',borderColor:'#c7b702'}}/>
        
      </View>
      )}
      showsVerticalScrollIndicator={false} 
      keyExtractor={item=>item.id}
      data={products}
      renderItem={({item})=>
        <CartProductItem cartItem = {item}/>
      }/>
    </View>
  );
};


const styles = StyleSheet.create({
    page:{
        padding: 10,
    },
})
export default ShoppingCartScreen;