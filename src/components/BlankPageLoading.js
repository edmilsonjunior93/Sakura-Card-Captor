import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const BlankPageLoading = () => {
  return (
    <SafeAreaView>
      <ActivityIndicator color="black" />
    </SafeAreaView>
  );
};

export default BlankPageLoading;

const styles = StyleSheet.create({});
