import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import QuantitySelector from '../QuantitySelector';

interface CartProductItemProps{
    cartItem: {
        id:string,
        quantity:number,
        option?:string,
        item: {
            id:string,
            title:string,
            image:string,
            avgRating:number,
            ratings:number,
            price:number,
            oldPrice?:number
        };
    };
    
}
const CartProductItem = ({cartItem}:CartProductItemProps) => {
    const {quantity: quantityProp , item} = cartItem;
    const [quantity, setQuantity] = useState(quantityProp)

  return (
    <View style = {styles.root}>
        <View style = {styles.row}>
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
        </View>
        <View style={styles.quantityContainer}>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
        </View>
        
    </View>
    
    
  );
};

export default CartProductItem