import React, {Component, useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {
  ref,
  child,
  get,
  set,
  getDatabase,
  onValue,
  push,
  update,
  remove
} from 'firebase/database';
import { db } from '../firebase.js';;

const HomeScreen = () => {

  let [userArray, setUserArray] = useState( );

  useEffect(() => {
    get(child(dbRef, `users/`)).then((snapshot) => {
    if (snapshot.exists()) {
      let users = snapshot.val();
      let userNames = Object.entries(users)
      setUserArray(userNames)
      console.log(snapshot.val());
      console.log('i set users',users)
      console.log('username', {userArray})
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}, [])

  const navigation = useNavigation();

  const dbRef = ref(getDatabase());

  const userWasSelected = (name) => {
    navigation.navigate('SelectCharecter',{
      user:name
    })
  }

  return(
    <KeyboardAvoidingView>
      <View>
          <Text>Select User</Text>
            {userArray?.length ? userArray.map((data, index) => { return ( <Text onPress={() => userWasSelected(data[0])} key={index} >{data[0]}</Text> )}) : null}
      </View>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen
