import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardListScreen from '../screens/CardListScreen';
import CardSreen from '../screens/CardSreen';
import tailwind from 'twrnc';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, contentStyle: tailwind`bg-red-200	` }}
    >
      <Stack.Screen name="CardListScreen" component={CardListScreen} />
      <Stack.Screen name="CardScreen" component={CardSreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
