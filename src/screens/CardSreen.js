import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';
import BackButton from '../components/BackButton';

const CardSreen = ({ route }) => {
  const { card } = route.params;

  if (card.length === 0) {
    return <BlankPageLoading />;
  }

  return (
    <SafeAreaView style={tailwind`flex-1`}>
      <View style={tailwind`flex-row justify-center relative`}>
        <BackButton />
        <Text style={tailwind`text-center pb-4 text-pink-600	text-3xl`}>
          {card.englishName}
        </Text>
      </View>

      <ScrollView>
        <Text style={tailwind`text-lg text-pink-600	`}>
          Spanish Name: {card.spanishName}
        </Text>
        <Text style={tailwind`text-lg text-pink-600	`}>
          Appeard Manga: {card.appeardManga}
        </Text>
        <Text style={tailwind`text-lg text-pink-600	`}>
          Appeard Anime: {card.appeardAnime}
        </Text>
        <Text style={tailwind`text-center	text-pink-600 text-2xl p-2`}>
          Clow Card
        </Text>
        <View style={tailwind`flex-row justify-center p-2`}>
          <Image
            resizeMode="contain"
            style={tailwind`w-6/12 h-60`}
            source={{ uri: card.clowCard }}
          />
          <View style={tailwind`w-2`} />
          <Image
            resizeMode="contain"
            style={tailwind`w-6/12 h-60`}
            source={{ uri: card.cardsReverse.clowReverse }}
          />
        </View>
        <Text style={tailwind`text-center	text-pink-600 text-2xl p-2`}>
          Sakura Card
        </Text>

        <View style={tailwind`flex-row justify-center p-2`}>
          <Image
            resizeMode="contain"
            style={tailwind`w-6/12 h-60`}
            source={{ uri: card.sakuraCard }}
          />
          <View style={tailwind`w-2`} />
          <Image
            resizeMode="contain"
            style={tailwind`w-6/12 h-60`}
            source={{ uri: card.cardsReverse.sakuraReverse }}
          />
        </View>

        <Text style={tailwind`text-lg text-pink-600`}>
          Meaning: {card.meaning}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardSreen;

const styles = StyleSheet.create({
  imagem: {
    width: 100,
    height: 100,
  },
});
