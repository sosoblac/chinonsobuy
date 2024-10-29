import {Text, View, ScrollView } from 'react-native';
import React,{useState} from 'react';
import { useRoute } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import product from '../../data/product';
import styles from './styles';

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null)
    const [quantity, setQuantity] = useState(1)

    const route = useRoute();
    console.log(route.params)
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image carousel */}
        <ImageCarousel images = {product.images}/>
      {/* Option Selector */}
      <Picker 
      selectedValue={selectedOption}
      onValueChange={(itemValue)=>setSelectedOption(itemValue)}>
            {product.options.map(option =><Picker.Item label={option} value={option} /> )}
        </Picker>
        
      {/* Price */}
        <Text style = {styles.price}>
            From ₦{product.price}
            {product.oldPrice && 
            <Text style={styles.oldPrice}> 
                ₦{product.oldPrice}
            </Text> }
        </Text>

      {/* Description */}
        <Text style = {styles.description}>
            {product.description}
        </Text>

      {/* Quantity selector */}
        <QuantitySelector quantity = {quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button text={'Add to cart'} onPress={()=>{console.warn('Add to cart')}} />
      <Button text={'Buy Now'} onPress={()=>{console.warn('Buy Now')}} />
    </ScrollView>
  )
}

export default ProductScreen