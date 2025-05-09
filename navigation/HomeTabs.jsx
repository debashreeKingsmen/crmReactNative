import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LineChart from '../src/component/LineChart';
import HomeScreen from '../screens/HomeScreen';
import {Image, TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FeedScreen from '../screens/FeedScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
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
                style={[styles.editIconWrapper, {marginRight: 15}]}>
                <Image
                  source={require('../assets/notification.png')}
                  style={styles.editIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleMenu} style={{marginRight: 15}}>
                <Image
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/62.jpg',
                  }}
                  style={{
                    width: 30,
                    cursor: 'pointer',
                    height: 30,
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: '#fff',
                    marginBottom: 1,
                  }}
                />
              </TouchableOpacity>
              {menuVisible && (
                <View style={styles.menu}>
                   <Text style={styles.menuItem}>👋  Hey, Kings Link</Text>
                  <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.menuItem}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                   onPress={() => navigation.navigate('Admin Setting')}>
                    <Text style={styles.menuItem}>Admin Setting</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.menuItem}>Profile Setting</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.menuItem}>Logout</Text>
                  </TouchableOpacity>
                </View>
              )}
            </>
          ),
        }}
      />
      <Tab.Screen name="LineChart" component={LineChart} />
      <Tab.Screen name="FeedScreen" component={FeedScreen} />
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
  menu: {
    position: 'absolute',
    cursor: 'pointer',
    top: 50,
    right: 11,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 1,
  },
  menuTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    paddingVertical: 5,
    fontSize: 16,
    borderRadius: 4,
  },
});
