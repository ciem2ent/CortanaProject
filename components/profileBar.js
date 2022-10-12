import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyProfileBar = ({name, job}) => {
  return (
    <View style={localStyles.base}>
      <Text>{name}</Text>
      <Text>{job}</Text>
    </View>
  );
};
export default MyProfileBar;

const localStyles = StyleSheet.create({
  base: {
    paddingVertical: 16,
    alignItems: 'center',
  },
});
