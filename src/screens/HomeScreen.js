
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity onPress={()=>navigation.navigate("AI")}>
        <LinearGradient colors={["#4facfe","#00f2fe"]} style={styles.aiBox}>
          <Ionicons name="sparkles" size={32} color="#fff"/>
          <Text style={styles.aiText}>الذكاء الاصطناعي</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.section}>أفلام</Text>
      <ScrollView horizontal>
        <TouchableOpacity style={styles.more} onPress={()=>navigation.navigate("Movies")}>
          <Text>عرض المزيد</Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.section}>أنمي</Text>
      <ScrollView horizontal>
        <TouchableOpacity style={styles.more} onPress={()=>navigation.navigate("Anime")}>
          <Text>عرض المزيد</Text>
        </TouchableOpacity>
      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:16 },
  aiBox:{
    height:120,
    borderRadius:24,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20
  },
  aiText:{
    color:"#fff",
    fontSize:22,
    marginTop:8
  },
  section:{
    fontSize:20,
    marginVertical:12
  },
  more:{
    width:120,
    height:160,
    backgroundColor:"#eee",
    borderRadius:16,
    justifyContent:"center",
    alignItems:"center"
  }
});
