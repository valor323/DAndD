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
  const [name, setName]= useState('')
  const [characterName, setCharacterName]= useState('')
  const [classDesired, setClassDesired]= useState('')

  const dbRef = ref(getDatabase());
  get(child(dbRef, `Users/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});




  const addUser = () => {
      const db = getDatabase();
      set(ref(db, 'users/' + name + '/' + characterName), {
        class: classDesired,
      });
    };

  return(
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value ={name}
          onChangeText={text => setName(text) }
          style={styles.input}
        />
        <TextInput
          placeholder="CharacterName"
          value ={characterName }
          onChangeText={text=> setCharacterName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Class"
          value ={classDesired }
          onChangeText={text=> setClassDesired(text)}
          style={styles.input}
        />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={addUser}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Add User</Text>
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer:{
    width: '80%'
  },
  input:{
    backgroundColor: 'white',
    paddingHorizantal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer:{
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button:{
    backgroundColor: '#0782F9',
    width:'100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonOutline:{
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2
  },
  buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutlineText:{
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16
  },
})
