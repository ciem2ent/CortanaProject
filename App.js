import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Steckbrief" component={Steckbrief} />
      <Tab.Screen name="Lebenslauf" component={Lebenslauf} />
      <Tab.Screen name="Notizen" component={Notizen} />
    </Tab.Navigator>
  );
}

function Steckbrief() {
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

function Lebenslauf() {
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
          <MyListElement
            date="2005-2011"
            label="Primarschule"
            text="1.-6. Klasse Schulhaus Spiezwiler"
          />
          <MyListElement
            date="2011-2014"
            label="Oberstufe"
            text="7.-9. Klasse Schulhaus Längenstein Spiez"
          />
          <MyListElement
            date="2014-2015"
            label="Weiterführende Schulen"
            text="10. Schuljahr IDM Spiez"
          />
          <MyListElement
            date="2015-2018"
            label="Ausbildung im Stauffacher Bern"
            text="Ausbildung zum Buchhändler EFZ an der WKS Bern"
          />
          <MyListElement
            date="2018-2019"
            label="Anstellung im Orell Füssli Loeb"
            text="Buchhändler EFZ"
          />
          <MyListElement
            date="2019-2019"
            label="Anstellung Stauffacher Bern"
            text="Buchhändler EFZ"
          />
          <MyListElement
            date="2019-2020"
            label="Militärdienst"
            text="Rekrutenschule als Funkaufklärer in Jassbach"
          />
          <MyListElement
            date="2020-Heute"
            label="Anstellung ZAP Brig"
            text="Buchhändler EFZ Abteilungsleitung Kinderbuch/Spielwaren"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Notizen() {
  return (
    <View>
      <Text>
        {' '}
        Danke für die beiden Tage und die Zeit die ihr euch für mich genommen
        habt.
      </Text>
    </View>
  );
}

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyListElement from './components/listelement';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
