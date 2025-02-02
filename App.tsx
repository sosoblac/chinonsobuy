/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
// import HomeScreen from './src/screens/HomeScreen';
// import ProductScreen from './src/screens/ProductScreen';
// import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
// import AddressScreen from './src/screens/AddressScreen';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, flex:1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Router/>
      
    </SafeAreaView>
  );
}


export default App;
