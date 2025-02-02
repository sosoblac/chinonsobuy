import { View, StyleSheet,FlatList } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = ({searchValue}:{searchValue:string}) => {
  console.log(searchValue)
  return (
    <View style={styles.page}>
      {/* Render product component */}
      <FlatList
      showsVerticalScrollIndicator={false} 
      keyExtractor={item =>item.id}
      data={products}
      renderItem={({item})=>
        <ProductItem item = {item}/>
      }/>
    </View>
  );
};


const styles = StyleSheet.create({
    page:{
        padding: 10
    },
})
export default HomeScreen;