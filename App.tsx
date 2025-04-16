// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import LoginScreen from './screens/LoginScreen';
// import LineChart from './src/component/LineChart';
// import ReportData from './src/component/ReportData';
// import DropdownList from './src/component/DropdownList';

// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <LoginScreen />
//       {/* <LineChart/> */}
//       {/* <ReportData/> */}
//       {/* <DropdownList/> */}
//     </SafeAreaView>
//   );
// };

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { enableScreens } from 'react-native-screens';

// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// import LineChart from './src/component/LineChart';
// import ReportData from './src/component/ReportData'

// enableScreens(); // Boost performance and avoid native module errors

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
        // <Stack.Screen name="Report Chart" component={LineChart} />
        // <Stack.Screen name="Report Table" component={ReportData} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// import * as React from 'react';
// import {Text, View, Button, Image, ScrollView} from 'react-native';
// import {NavigationContainer, useNavigation} from '@react-navigation/native';
// import {
//   createNativeStackNavigator,
//   NativeStackNavigationProp,
// } from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import LineChart from './src/component/LineChart';

// // 1. Define types for navigators
// type RootStackParamList = {
//   HomeNew: undefined;
//   Profile: undefined;
// };

// type HomeTabsParamList = {
//   Feed: undefined;
//   LineChart: undefined;
//   Messages: undefined;
// };

// // 2. Create navigators with types
// const RootStack = createNativeStackNavigator<RootStackParamList>();
// const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();

// // 3. Screens
// function ProfileScreen() {
//   return (
//     <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
//       <View
//         style={{
//           backgroundColor: '#8d6e63',
//           alignItems: 'center',
//           paddingTop: 60,
//           paddingBottom: 30,
//           borderBottomLeftRadius: 30,
//           borderBottomRightRadius: 30,
//           position: 'relative',
//         }}>
//         <Image
//           source={{uri: 'https://randomuser.me/api/portraits/men/9.jpg'}}
//           style={{
//             width: 90,
//             height: 90,
//             borderRadius: 45,
//             borderWidth: 2,
//             borderColor: '#ffffff',
//             marginBottom: 10,
//           }}
//         />
//         <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>
//           Adarsh KN{' '}
//         </Text>
//         <Text style={{fontSize: 14,fontWeight:"semibold" , color: '#e0e0e0', marginBottom: 10}}>
//           Area Sales Manager
//         </Text>

//         <View style={{flexDirection: 'row', gap: 20}}>
//           <Text style={{color: '#fff', fontSize: 14}}>
//             <Text style={{fontWeight: 'bold', fontSize: 16}}>3 </Text>
//             RM
//           </Text>
//         </View>
//       </View>

//       <View style={{ paddingHorizontal: 20, paddingVertical: 20}}>
//         <InfoItem icon="📞" text="7349747659" />
//         <InfoItem icon="📧" text="adarsh@kingsmenrealty.com" />
//       </View>
//     </ScrollView>
//   );
// }

// const InfoItem = ({icon, text}: {icon: string; text: string}) => (
//   <View
//     style={{
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 25,
//       borderBottomWidth: 0.5,
//       borderBottomColor: '#ddd',
//       paddingBottom: 10,
//     }}>
//     <Text style={{fontSize: 18}}>{icon}</Text>
//     <Text style={{fontSize: 16, marginLeft: 10, color: '#333'}}>{text}</Text>
//   </View>
// );

// type FeedScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// function FeedScreen() {
//   const navigation = useNavigation<FeedScreenNavigationProp>();

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Feed Screen</Text>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );
// }



// // 4. Tabs nested inside a stack
// function HomeTabsScreen() {
//   return (
//     <HomeTabs.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#8d6e63', 
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}
//     >
//       {/* <HomeTabs.Screen name="Feed" component={FeedScreen} /> */}
//       <HomeTabs.Screen name="Feed" component={FeedScreen} />
//       <HomeTabs.Screen name="LineChart" component={LineChart} />
//     </HomeTabs.Navigator>
//   );
// }

// // 5. Main App with NavigationContainer
// export default function App() {
//   return (
//     <NavigationContainer>
      
//       <RootStack.Navigator   screenOptions={{
//         headerStyle: {
//           backgroundColor: '#8d6e63', // Sets the background of the header
//         },
//         headerTintColor: '#fff', // Optional: makes text/icons white
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}> 
//         <RootStack.Screen
//           name="HomeNew"
//           component={HomeTabsScreen}
//           options={{headerShown: false}}
//         />
//         <RootStack.Screen  name="Profile" component={ProfileScreen} />
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// }



import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigator from './navigation/RootNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); 


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedIn ? (
          <Stack.Screen name="Login">
            {() => <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="MainApp">
          {() => <DrawerNavigator setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}




