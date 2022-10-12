import * as React from 'react';
import {View, Text, useColorScheme, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyListElement from '../../components/listelement';

export default function Steckbrief() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <MyListElement label="Vor-Nachname" text="Mounir Ben Nasr" />
          <MyListElement label="Geburtsdatum & Alter" text="21.07.1998" />
          <MyListElement
            label="Adresse,Wohnort"
            text="Neumattstrasse 5 3700 Spiez"
          />
          <MyListElement label="@-Adresse" text="mounirben98@hotmail.com" />
          <MyListElement label="Telefonnummer" text="0786578909" />
          <MyListElement
            label="Hobbies"
            text=" Lesen, Gamen, Ins Kino gehen, Serien, Animes und Fitness"
          />
          <MyListElement
            label="Sprachen"
            text="Deutsch, Englisch, Französisch"
          />
          <MyListElement label="Lieblingsfarbe" text=" Rot" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
