import React from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function Detail() {
 const route = useRoute();
 const counter = route.params
  return (
    <Text> O número é : {counter.counter}</Text>
  )
}