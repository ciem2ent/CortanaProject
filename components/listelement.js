import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyListElement = ({label, text, date}) => {
  return (
    <View style={localStyles.base}>
      <Text>{date}</Text>
      <Text>{label}</Text>
      <Text>{text}</Text>
    </View>
  );
};
export default MyListElement;

const localStyles = StyleSheet.create({
  base: {
    paddingVertical: 16,
    alignItems: 'center',
  },
});
