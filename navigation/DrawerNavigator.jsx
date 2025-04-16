import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image, TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import HomeScreen from '../screens/HomeScreen';
import LineChart from '../src/component/LineChart';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ReportData from '../src/component/ReportData';

import CustomDrawerContent from '../screens/CustomDrawerContent';
import AdminSetting from '../src/component/AdminSetting';

const Drawer = createDrawerNavigator();

function HeaderIcons() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <TouchableOpacity onPress={toggleMenu} style={{marginRight: 15}}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/62.jpg'}}
          style={styles.profile}
        />
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menu}>
          <Text>👋 Hey, Kings Link</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Admin Setting')}>
            <Text style={styles.menuItem}>Admin Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.menuItem}>Profile Setting</Text>
          </TouchableOpacity>
          
        </View>
      )}
    </>
  );
}

export default function DrawerNavigator({setIsLoggedIn}) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => (
        <CustomDrawerContent {...props} setIsLoggedIn={setIsLoggedIn} />
      )}
      screenOptions={{
        headerStyle: {backgroundColor: '#8d6e63'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerRight: () => <HeaderIcons />,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Report Table" component={ReportData} />
      <Drawer.Screen name="LineChart" component={LineChart} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Admin Setting" component={AdminSetting} />
    </Drawer.Navigator>
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
