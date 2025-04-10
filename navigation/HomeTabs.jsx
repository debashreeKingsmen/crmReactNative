import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LineChart from '../src/component/LineChart';
import HomeScreen from '../screens/HomeScreen';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#8d6e63',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {backgroundColor: '#8d6e63'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          headerRight: () => (
            <>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}
              style={{marginRight: 15}}>
              <Image
                scr="../assets/notification.png"
                
              />
            </TouchableOpacity>
             <TouchableOpacity
             onPress={() => navigation.navigate('Profile')}
             style={{marginRight: 15}}>
             <Image
               source={{uri: 'https://randomuser.me/api/portraits/men/62.jpg'}}
               style={{
                 width: 30,
                 cursor: 'pointer',
                 height: 30,
                 borderRadius: 15,
                 borderWidth: 1,
                 borderColor: '#fff',
                 marginBottom: 1,
               }}
             />
           </TouchableOpacity>
            </>
          ),
        }}
      />
      <Tab.Screen name="LineChart" component={LineChart} />
    </Tab.Navigator>
  );
}
