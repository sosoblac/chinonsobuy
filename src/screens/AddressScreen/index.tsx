import { StyleSheet, Text, TextInput, View, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, {useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import countryList from 'country-list';
import Button from '../../components/Button';

const countries = countryList.getData()

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [addressError,setAddressError] = useState('Invalid Address')
  const [city, setCity] = useState('')

  const onCheckout = ()=> {
    if(addressError){
      Alert.alert('Fix all field errors before submitting ')
      return;
    }
    if (!fullName){
      Alert.alert('Please fill in the full name field');
      return;
    }
    if (!phone){
      Alert.alert('Please fill in the full name field');
      return;
    }
    console.warn('Success, Checkout')
  }

  const validateAddress = ()=>{
    if (address.length < 3 ){
      setAddressError('Address is too short')
    }
    if (address.length > 10 ){
      setAddressError('Address is too long')
    }
    if (address.length == 0 ){
      setAddressError('Fill in an address')
    }

  }
  console.log(fullName)
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'android' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
    >
      <ScrollView style={styles.root}>
      <View style = {styles.row}>
        <Picker
        selectedValue={country}
        onValueChange={setCountry}
        >
          {countries.map(country=>(
            <Picker.Item value={country.code} label = {country.name}/>
          ))}
          
        </Picker>
      </View>
      {/* Fullname */}
      <View style = {styles.row}>
        <Text style = {styles.label}>Full name (First and last name)</Text>
        <TextInput
         style={styles.input}
         placeholder='Full name'
        value={fullName}
        onChangeText={setFullName}
        />
      </View>

      {/* Phone Number */}
      <View style = {styles.row}>
        <Text style = {styles.label}>Phone number</Text>
        <TextInput
         style={styles.input}
         placeholder='Phone number'
        value={phone}
        onChangeText={setPhone}
        keyboardType='phone-pad'
        />
      </View>

      {/* Address */}
      <View style = {styles.row}>
        <Text style = {styles.label}>Address</Text>
        <TextInput
         style={styles.input}
         placeholder='Address'
        value={address}
        onEndEditing={validateAddress}
        onChangeText={(text)=>{
          setAddress(text);
          setAddressError('');
        }}
        />
        {addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
      </View>

      {/* City */}
      <View style = {styles.row}>
        <Text style = {styles.label}>City</Text>
        <TextInput
         style={styles.input}
         placeholder='City'
        value={city}
        onChangeText={setCity}
        />
      </View>

      <Button text = 'Checkout' onPress={onCheckout}/>
    </ScrollView>
    </KeyboardAvoidingView>
    
  )
}

export default AddressScreen