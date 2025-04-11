import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LineChart from '../src/component/LineChart';
import HomeScreen from '../screens/HomeScreen';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
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
              style={[styles.editIconWrapper , {marginRight: 15}]}>
              <Image
                source={require('../assets/notification.png')}
                style={styles.editIcon}
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


const styles = StyleSheet.create({
  editIconWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 4,
    elevation: 3,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
});
