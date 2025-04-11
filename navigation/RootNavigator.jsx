import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import LineChart from '../src/component/LineChart';
import ReportData from '../src/component/ReportData';
import NotificationScreen from '../screens/NotificationScreen';
import FeedScreen from '../screens/FeedScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#8d6e63', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Report Chart" component={LineChart} />
      <Stack.Screen name="Report Table" component={ReportData} />
      <Stack.Screen name="FeedScreen" component={FeedScreen} />
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {backgroundColor: '#8d6e63'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
}
