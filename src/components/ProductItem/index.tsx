import { View, Text, Image,Pressable } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';




interface ProductItem{
    item:{
        id:string,
        title:string,
        image:string,
        avgRating:number,
        ratings:number,
        price:number,
        oldPrice?:number
    }
}
const ProductItem = ({item}:ProductItem) => {
    const navigation = useNavigation()
    const onPress = ()=>{
        navigation.navigate('ProductDetails', {id: item.id})
    }
  return (
    <Pressable onPress={onPress} style = {styles.root}>
        <Image style={styles.image} 
        source={{uri: item.image}}/>

        <View style={styles.rightContainer}>
            <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
            {/* Ratings */}
            <View style={styles.ratingSContainer}>
                {[0,0,0,0,0].map((el,i)=>
                <FontAwesome 
                style={styles.star} 
                name={i < Math.floor(item.avgRating)?'star':'star-o'} 
                size={18} 
                color={'#e47911'}/>
                ) }
                
                <Text> {item.ratings} </Text>
            </View>

            <Text style = {styles.price}>From ₦{item.price}
                {item.oldPrice && <Text style={styles.oldPrice}> ₦{item.oldPrice}</Text> }
            </Text>
        </View>
    </Pressable>
    
  );
};

export default ProductItem