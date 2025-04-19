
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen'; 
import DrawerNavigator from './DrawerNavigator'; 

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

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
