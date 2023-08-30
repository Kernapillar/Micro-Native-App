import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Alex");

  const updateName = (newName) => {
    setName(newName);
  }

  const incrementCounter = () => {
    setCounter(counter + 1);
  }
  const decrementCounter = () => {
    setCounter(counter - 1);
  }
  const resetCounter = () => {
    setCounter(0);
  }
  const halfCounter = () => {
    setCounter(Math.floor(counter / 2));
  }

  return (
    <View style={styles.container}>
      <Text> {name}'s counter: {counter}</Text>

      <Button onPress={incrementCounter} style={styles.button} title='Increment' ></Button>
      <Button onPress={decrementCounter} style={styles.button} title='Decrement' ></Button>
      <Button onPress={halfCounter} style={styles.button} title='Half'></Button>
      <Button onPress={resetCounter} style={styles.button} title='Reset'></Button>
      <TextInput onChangeText={text => updateName} placeholder='Update Name' />
      {/* <Button title='Youtube' onPress={() => Linking.openURL('https://youtube.com/gymnast86')} style={styles.button} ></Button> */}


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: "15",
    backgroundColor: "grey",
    border: '1px solid black',
    paddingBottom: '5%',
  }
});
