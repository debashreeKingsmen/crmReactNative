// AppNavigator.js
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen'; // your Login screen
import DrawerNavigator from './DrawerNavigator';  // your Drawer that includes Home, LineChart

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Local login state

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen {...props} onLogin={() => setIsLoggedIn(true)} />
          )}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="MainApp" component={DrawerNavigator} />
      )}
    </Stack.Navigator>
  );
}
