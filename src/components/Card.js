
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image}/>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card:{
    width:140,
    margin:8,
    backgroundColor:"#fff",
    borderRadius:16,
    overflow:"hidden"
  },
  image:{
    height:180
  },
  title:{
    padding:8,
    textAlign:"center"
  }
});
