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

  const navigation = useNavigation();

  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/`)).then((snapshot) => {
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
        level:'edit to add',
        background: 'edit to add',
        race: 'edit to add',
        alignment: 'edit to add',
        experience_Points: 'edit to add',
        proficiency_Bonus: 'edit to add',
        armor_Class: 'edit to add',
        initiative: 'edit to add',
        speed: 'edit to add',
        current_Hit_Points: 'edit to add',
        temporary_Hit_Points: 'edit to add',
        strength: 'edit to add',
        dexterity: 'edit to add',
        constitution: 'edit to add',
        intelligence: 'edit to add',
        wisdom: 'edit to add',
        charisma: 'edit to add',
        cp: 'edit to add',
        sp: 'edit to add',
        ep: 'edit to add',
        gp: 'edit to add',
        pp: 'edit to add',
        backpack:{

        },
        savingThrows:{
          strength: 'Stregnth',
          dexterity: 'Dexterity',
          constitution: 'Constitution',
          intelligence: 'Intelligence',
          wisdom: 'Wisdom',
          charisma: 'Charisma'
        },
        skills:{
          acrobatics: 'Acrobatics(Dex)',
          animalHandling: 'Animal Handling(Wis)',
          arcana: 'Arcana(Int)',
          athletics: 'Athletics(Str)',
          deception: 'Deception(Cha)',
          history: 'History(Int)',
          insight: 'Insight(Wis)',
          intimidation: 'Intimidation(Cha)',
          investigation: 'Investigation(Int)',
          medicine: 'Medicine(Wis)',
          nature: 'Nature(Int)',
          perception: 'Perception(Wis)',
          performance: 'Performance(Cha)',
          persuasion: 'Persuasion(Cha)',
          religion: 'Religion(Int)',
          sleightOfHand: 'Sleight of Hand(Dex)',
          stealth: 'Stealth(Dex)',
          survival: 'Survival(Wis)'
        },
        weapons:{

        },
        other_Proficiencies_And_Languages:{

        },
        features_And_Traits: {

        },
        equipment:{

        },



      });
      navigation.navigate('SelectUser')
    };

  const selectUser = () => {
    navigation.navigate('SelectUser')
  }

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
          <TouchableOpacity
            onPress={selectUser}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Select User</Text>
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
