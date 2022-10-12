import * as React from 'react';
import {View, useColorScheme, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyListElement from '../../components/listelement';

export default function LebenslaufScreen() {
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
