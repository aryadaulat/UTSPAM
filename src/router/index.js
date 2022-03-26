/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Lainnya, Pembatalan, Pesanan} from '../Page';

const Stack = createNativeStackNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
			options={{
				tabBarLabel: 'Home',
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name="home" color={color} size={size} />
				),
			}}
			/>
      <Tab.Screen name="Lainnya" component={Lainnya}
			options={{
				tabBarLabel: 'Lainnya',
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name="home" color={color} size={size} />
				),
			}}
			 />
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="MyTabs">
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lainnya"
        component={Lainnya}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pembatalan"
        component={Pembatalan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
