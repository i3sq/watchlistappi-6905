
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen';
import AnimeScreen from '../screens/AnimeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AIScreen from '../screens/AIScreen';
import DetailScreen from '../screens/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown:false }}/>
      <Stack.Screen name="AI" component={AIScreen} options={{ headerShown:false }}/>
    </Stack.Navigator>
  );
}

function MoviesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MoviesMain" component={MoviesScreen} options={{ title:"الأفلام" }}/>
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title:"التفاصيل" }}/>
    </Stack.Navigator>
  );
}

function AnimeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AnimeMain" component={AnimeScreen} options={{ title:"أنمي" }}/>
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title:"التفاصيل" }}/>
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let icon;

        if (route.name === "Home") icon = "home";
        if (route.name === "Movies") icon = "film";
        if (route.name === "Anime") icon = "play";
        if (route.name === "Settings") icon = "settings";

        return <Ionicons name={icon} size={size} color={color}/>;
      }
    })}>
      <Tab.Screen name="Home" component={HomeStack} options={{ title:"الرئيسية" }}/>
      <Tab.Screen name="Movies" component={MoviesStack} options={{ title:"الأفلام" }}/>
      <Tab.Screen name="Anime" component={AnimeStack} options={{ title:"المسلسلات" }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title:"الإعدادات" }}/>
    </Tab.Navigator>
  );
}
