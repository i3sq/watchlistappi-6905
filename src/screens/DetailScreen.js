
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Picker } from 'react-native';

export default function DetailScreen({ route }) {
  const { item } = route.params;
  const [status,setStatus] = useState("watching");

  return (
    <View style={styles.container}>
      <Image source={{uri:item.image}} style={styles.image}/>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.desc}</Text>

      <Text>الحالة:</Text>
      <Picker selectedValue={status} onValueChange={setStatus}>
        <Picker.Item label="أشاهد حاليا" value="watching"/>
        <Picker.Item label="تمت المشاهدة" value="done"/>
        <Picker.Item label="لاحقا" value="later"/>
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:16},
  image:{height:300,borderRadius:16},
  title:{fontSize:24,marginVertical:12}
});
