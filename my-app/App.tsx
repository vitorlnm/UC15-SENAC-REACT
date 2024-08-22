import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Feed } from '../my-app/src/screens/Feed';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
