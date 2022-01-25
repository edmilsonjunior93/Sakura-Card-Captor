import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BlankPageLoading from '../components/BlankPageLoading';
import api from '../services/api';
import CardItem from '../components/CardItem';
import tailwind from 'twrnc';

const CardListScreen = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    async function loadCard() {
      const result = await api.get('/card');

      setCard(result.data.data);
    }

    loadCard();
  }, []);

  if (card.length === 0) {
    return <BlankPageLoading />;
  }

  return (
    <SafeAreaView>
      <View style={tailwind`p-2`}>
        <Text style={tailwind`text-3xl text-center text-pink-600 italic`}>
          Sakura CardCaptor Card List
        </Text>
      </View>

      <FlatList
        data={card}
        renderItem={({ item }) => <CardItem card={item} />}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({});
