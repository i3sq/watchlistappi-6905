
import React, { useContext } from 'react';
import { View, Text, Switch } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <View style={{flex:1,padding:20}}>
      <Text>الوضع الداكن</Text>
      <Switch value={dark} onValueChange={setDark}/>
    </View>
  );
}
