import { FlatList, StyleSheet, Text, View,Image, useWindowDimensions } from 'react-native'
import React, {useCallback, useState} from 'react'

interface ImageCarouselProp{
    images:string[]
}
const ImageCarousel = ({images}:ImageCarouselProp) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const windowWidth = useWindowDimensions().width

    const onFlatlistUpdate =useCallback(({viewableItems}) => {
        if (viewableItems.length>0){
            setActiveIndex(viewableItems[0].index || 0)
        }
        // console.log(viewableItems)
    },[]);
  return (
    <View style={styles.root}>
     <FlatList
     data={images}
     renderItem={({item})=>(
        <Image style = {[styles.image,{width:windowWidth - 40}]} source={{uri:item}}/>
     )}
     horizontal
     showsHorizontalScrollIndicator={false}
     snapToInterval={windowWidth - 20}
     snapToAlignment={'end'}
     decelerationRate={'fast'}
     viewabilityConfig={{
        viewAreaCoveragePercentThreshold:50,
     }}
     onViewableItemsChanged={onFlatlistUpdate}
     />
    <View style={styles.dots}>
        {images.map((image,index)=>(
            <View 
            style={[
                styles.dot,{
                    backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'
                }
            ]}>

            </View>
        ))}
    </View>
     
    </View>
  )
}

export default ImageCarousel

const styles = StyleSheet.create({
    root:{

    },
    image:{
        margin:10,
        width:100,
        height:250,
        resizeMode:'contain'
    },
    dot:{
        width:10,
        height:10,
        borderRadius:25,
        borderWidth:1,
        backgroundColor:'#ededed',
        borderColor:'#c9c9c9',
        margin:5
    },
    dots:{
        flexDirection:'row',
        justifyContent:'center',

    }
})