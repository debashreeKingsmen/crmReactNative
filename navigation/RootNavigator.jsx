// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeTabs from './HomeTabs';
// import ProfileScreen from '../screens/ProfileScreen';
// import LoginScreen from '../screens/LoginScreen';
// import LineChart from '../src/component/LineChart';
// import ReportData from '../src/component/ReportData';
// import NotificationScreen from '../screens/NotificationScreen';
// import FeedScreen from '../screens/FeedScreen';
// import AdminSetting from '../src/component/AdminSetting';

// const Stack = createNativeStackNavigator();

// export default function RootNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{
//         headerStyle: {
//           backgroundColor: '#8d6e63', 
//         },
//         headerTintColor: '#fff', 
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }} initialRouteName="Login">
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Notification" component={NotificationScreen} />
//       <Stack.Screen name="Report Chart" component={LineChart} />
//       <Stack.Screen name="Report Table" component={ReportData} />
//       <Stack.Screen name="Feed Screen" component={FeedScreen} />
//       <Stack.Screen name="Admin Setting" component={AdminSetting} />
//       <Stack.Screen
//         name="AddProperty"
//         component={AddPropertyScreen}
//         options={{ title: 'Add Property' }}
//       />
//       <Stack.Screen
//         name="Home"
//         component={HomeTabs}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           headerStyle: {backgroundColor: '#8d6e63'},
//           headerTintColor: '#fff',
//           headerTitleStyle: {fontWeight: 'bold'},
//         }}
//       />
//     </Stack.Navigator>
//   );
// }



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import AddPropertyScreen from '../screens/AddPropertyScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator({ setIsLoggedIn }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer">
        {() => <DrawerNavigator setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="AddProperty" component={AddPropertyScreen} />
    </Stack.Navigator>
  );
}
