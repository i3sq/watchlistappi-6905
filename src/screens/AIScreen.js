
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { askGemini } from '../services/gemini';
import { Ionicons } from '@expo/vector-icons';

export default function AIScreen({ navigation }) {
  const [text,setText] = useState("");
  const [chat,setChat] = useState([]);

  async function send(){
    const res = await askGemini(text);
    setChat([...chat,{q:text,a:res}]);
    setText("");
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.back} onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back" size={24}/>
      </TouchableOpacity>

      <ScrollView>
        {chat.map((c,i)=>(
          <View key={i}>
            <Text>أنت: {c.q}</Text>
            <Text>AI: {c.a}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputBox}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="اكتب سؤالك..."
          style={styles.input}
        />
        <TouchableOpacity onPress={send}>
          <Ionicons name="send" size={24}/>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:16},
  back:{position:"absolute",top:40,left:20,zIndex:10},
  inputBox:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#eee",
    borderRadius:30,
    padding:10
  },
  input:{flex:1}
});
