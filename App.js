import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [counter, setCounter] = useState(0);

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
      <Text> {counter}</Text>
      <Pressable onTouchStart={incrementCounter} style={styles.button}><Text>Increment + 1 </Text></Pressable>
      <Pressable onTouchStart={decrementCounter} style={styles.button}><Text>Decrement - 1 </Text></Pressable>
      <Pressable onTouchStart={halfCounter} style={styles.button}><Text> Half </Text></Pressable>
      <Pressable onTouchStart={resetCounter} style={styles.button}><Text>Reset </Text></Pressable>

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
    fontSize: "10%",
    backgroundColor: "grey",
    border: '1px solid black',
    paddingBottom: '5%',
  }
});
