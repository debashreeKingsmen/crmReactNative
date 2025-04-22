import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import AddPropertyScreen from '../screens/AddPropertyScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainDrawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddProperty"
        component={AddPropertyScreen}
        options={{ title: 'Add Property' }}
      />
    </Stack.Navigator>
  );
}
