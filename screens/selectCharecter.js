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

const SelectCharecter = ({route}) => {



  let {user} = route.params
  let [charecterName, setCharecterName] = useState( )


  useEffect(() => {
    get(child(dbRef, `users/` + {user}.user + '/')).then((snapshot) => {
    if (snapshot.exists()) {
      let charecters = snapshot.val();
      let charecterNames = Object.entries(charecters)
      setCharecterName(charecterNames)
      console.log('snapshot',charecters)
      console.log('SnapshotEntries', {charecterName})
    } else {
      console.log("No data available");
      console.log('params', {user})
    }
  }).catch((error) => {
    console.error(error);
  });
  }, [])

  const navigation = useNavigation();

  const dbRef = ref(getDatabase());

  const charecterWasSelected = (char) => {
    console.log('char', typeof char)
    navigation.navigate('CharecterInfo',{
      user:{user}.user,
      char:char
    })
  }

  return(
    <KeyboardAvoidingView>
      <View>
          <Text>Select Charecter</Text>
          {charecterName?.length ? charecterName.map((data, index) => { return ( <Text onPress={() => charecterWasSelected(data[0])} key={index} >{data[0]}</Text> )}) : null}
      </View>
    </KeyboardAvoidingView>
  )
}

export default SelectCharecter
