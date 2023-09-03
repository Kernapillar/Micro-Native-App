import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking, TextInput, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Alex");

  const updateName = (newName) => {
    newName.length === 0 ? setName("Alex") : setName(newName);
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
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Text> {name}'s counter: {counter}</Text>

      <Button onPress={incrementCounter} color="blue" style={styles.button} title='Increment' ></Button>
      <Button onPress={decrementCounter} color="green" style={styles.button} title='Decrement' ></Button>
      <Button onPress={halfCounter} color="purple" style={styles.button} title='Half'></Button>
      <Button onPress={resetCounter} color="orange" style={styles.button} title='Reset'></Button>
      <TextInput onChangeText={text => updateName(text)} placeholder='Update Name' />
      {/* <Button title='Youtube' onPress={() => Linking.openURL('https://youtube.com/gymnast86')} style={styles.button} ></Button> */}


      <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStyle: "solid", 
    borderColor: "red",
    borderWidth:"3",
    borderRadius: "10",
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
