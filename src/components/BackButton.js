import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import tailwind from 'twrnc';
import { AntDesign } from '@expo/vector-icons';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={tailwind`absolute left-0`}
    >
      <AntDesign name="back" size={24} color="#db2777" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
