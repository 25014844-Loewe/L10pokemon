import React from 'react';
import { StyleSheet, Text, View, SectionList, Button, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PokemonBox from './components/PokemonBox';

const datasource = [
  {
    data: [
      {
        name: 'Pikachu',
        cardNumber: '25',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png',
      },
      {
        name: 'Voltorb',
        cardNumber: '100',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_100-2x.png',
      },
    ],
    title: 'ELECTRIC',
    bgcolor: 'yellow',
    icon: 'flash',
  },
  {
    data: [
      {
        name: 'Charmander',
        cardNumber: '4',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png',
      },
      {
        name: 'Growlithe',
        cardNumber: '58',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_58-2x.png',
      },
    ],
    title: 'FIRE',
    bgcolor: 'coral',
    icon: 'fire',
  },
];

export default function App() {
  const renderItem = ({ item }) => {
    return (
        <PokemonBox
            name={item.name}
            cardNumber={item.cardNumber}
            imageUrl={item.imageUrl}
        />
    );
  };

  const renderSectionHeader = ({ section: { title, bgcolor, icon } }) => {
    return (
        <View style={[styles.headerContainer, { backgroundColor: bgcolor }]}>
          <MaterialCommunityIcons name={icon} size={22} color="black" />
          <Text style={styles.headerText}>{title}</Text>
        </View>
    );
  };

  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
              title="add pokemon"
              onPress={() => Alert.alert('Add Pokemon', 'New pokemon coming soon')}
          />
        </View>

        <SectionList
            sections={datasource} renderItem={renderItem} renderSectionHeader={renderSectionHeader}
            keyExtractor={(item, index) => item.name + index}
            contentContainerStyle={styles.listContainer}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  buttonContainer: {
    paddingHorizontal: 18,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 16,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 8,
    color: 'black',
  },
});