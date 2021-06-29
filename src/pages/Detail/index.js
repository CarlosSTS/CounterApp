import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Detail() {
  const route = useRoute();
  const counter = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.number}> O número é : {counter.counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  }
})