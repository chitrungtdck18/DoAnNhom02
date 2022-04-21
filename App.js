
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/Screen/Login'
import Navigation from './src/Routing/Navigation'

export default function App() {
 
  return (
    <Navigation/>
  );
};

const styles = StyleSheet.create({
});

