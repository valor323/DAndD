import React, {Component, useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
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

const CharecterInfo = ({route}) => {



  let {user} = route.params
  let [charecterInfo, setCharecterInfo] = useState( )
  let [charecterInfoState, setCharecterInfoState] = useState( )
  let [armorClass, setArmorClass] = useState( '' )
  let charecterInformation;

  useEffect(() => {
    get(child(dbRef, `users/` + route.params.user + '/' + route.params.char + '/')).then((snapshot) => {
    if (snapshot.exists()) {
      charecterInformation = snapshot.val();
      let charecterInformationState = Object.entries(charecterInformation)
      setCharecterInfo(charecterInformation)
      setCharecterInfoState(charecterInformationState)
      console.log('snapshot', charecterInfo)
      console.log('SnapshotEntries', charecterInformationState)
    } else {
      console.log('user', {user}.user)
      console.log('charecter', route.params.char)
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
    console.log('{charecterName}', charecterName)
  }

  return(
    <ScrollView>
      <KeyboardAvoidingView>
        <View>
          <Text>{route.params.char}</Text>
        </View>
        <View>
          <Text>Class</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.class}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
      </View>
      <View>
        <Text>Level</Text>
        {charecterInfoState?.length ? <TextInput
          value = {charecterInfo.level}
          onChangeText={text => setArmorClass(text) }
          style={styles.input}
          /> : null}
    </View>
      <View>
        <Text>Race</Text>
        {charecterInfoState?.length ? <TextInput
          value = {charecterInfo.race}
          onChangeText={text => setArmorClass(text) }
          style={styles.input}
          /> : null}
    </View>
    <View>
      <Text>Background</Text>
      {charecterInfoState?.length ? <TextInput
        value = {charecterInfo.background}
        onChangeText={text => setArmorClass(text) }
        style={styles.input}
        /> : null}
  </View>
  <View>
    <Text>Alignment</Text>
    {charecterInfoState?.length ? <TextInput
      value = {charecterInfo.alignment}
      onChangeText={text => setArmorClass(text) }
      style={styles.input}
      /> : null}
</View>
        <View>
          <Text>Armor Class</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.armor_Class}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
      </View>
      <View>
        <Text>Initiative</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.initiative}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
      </View>
      <View>
        <Text>Speed</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.speed}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
      </View>
      <View>
        <Text>Current Hit Points</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.current_Hit_Points}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
      </View>
      <View>
        <Text>Temporary Hit Points</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.temporary_Hit_Points}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
      </View>
      <View>
        <Text>Strength</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.strength}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
      </View>
      <View>
        <Text>Dexterity</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.dexterity}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
      </View>
      <View>
        <Text>Constitution</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.constitution}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
      </View>
      <View>
        <Text>Intelligence</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.intelligence}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
      </View>
      <View>
        <Text>Wisdom</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.wisdom}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
      </View>
      <View>
        <Text>Saving Throws</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.savingThrows.strength}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Strength</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.savingThrows.dexterity}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Dexterity</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.savingThrows.constitution}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Constitution</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.savingThrows.intelligence}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Intelligence</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.savingThrows.wisdom}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Wisdom</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.savingThrows.charisma}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Charisma</Text>
      </View>
      <View>
        <Text>Skills</Text>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.acrobatics}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Acrobatics(Dex)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.animalHandling}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Animal Handling(Wis)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.arcana}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Arcana(Int)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.athletics}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Athletics(Str)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.deception}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Deception(Cha)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.history}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>History(Int)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.insight}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Insight(Wis)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.intimidation}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Intimidation(Cha)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.investigation}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Investigation(Int)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.medicine}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Medicine(Wis)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.nature}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Nature(Int)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.perception}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Perception(Wis)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.performance}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Performance(Cha)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.persuasion}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Persuasion(Cha)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.religion}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Religion(Int)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.sleightOfHand}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Sleight of Hand(Dex)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.stealth}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Stealth(Dex)</Text>
      </View>
      <View>
          {charecterInfoState?.length ? <TextInput
            value = {charecterInfo.skills.survival}
            onChangeText={text => setArmorClass(text) }
            style={styles.input}
            /> : null}
            <Text>Survival(Wis)</Text>
      </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default CharecterInfo


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
