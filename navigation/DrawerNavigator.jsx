import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import LineChart from '../src/component/LineChart';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

function HeaderIcons() {
  const navigation = useNavigation();
  return (
   <>
   
      <TouchableOpacity
        onPress={() => navigation.navigate('Notification')}
        style={[styles.iconWrapper, {marginRight: 15}]}>
        <Image
          source={require('../assets/notification.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={{marginRight: 15}}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/62.jpg'}}
          style={styles.profile}
        />
      </TouchableOpacity>
   </>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Screen  screenOptions={{
        headerStyle: {
          backgroundColor: '#8d6e63', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} initialRouteName="Login">
        <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#8d6e63'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerRight: () => <HeaderIcons />,
      }}>
        {/* <Drawer.Screen name="Login" component={LoginScreen}/> */}
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="LineChart" component={LineChart} />
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
    </Drawer.Navigator>
    </Drawer.Screen>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 4,
    elevation: 3,
  },
  icon: {
    width: 20,
    height: 20,
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
