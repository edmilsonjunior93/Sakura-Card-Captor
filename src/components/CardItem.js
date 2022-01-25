import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import tailwind from 'twrnc';

const CardItem = ({ card }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={tailwind`bg-red-50	p-4 m-1 rounded`}
      onPress={() => navigation.navigate('CardScreen', { card })}
    >
      <Text style={tailwind`text-2xl text-pink-600`}>{card.englishName}</Text>
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({});
