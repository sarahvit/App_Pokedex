import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native';
import Card from './Card';
import styles from './styles';
import Pokemon from './Pokemon';

export default function App() {
  return (
    <View style={styles.container} >
        <StatusBar style="auto" />
        <Pokemon />
      
    </View>
  );
}


