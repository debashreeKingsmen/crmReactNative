import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      {/* Kings Link Heading */}
      <View style={styles.header}>
        <Text style={styles.logoText}>Kings Link</Text>
      </View>

      <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => props.setIsLoggedIn(false)}
      >
       
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  logoutIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#8d6e63',
  },
  logoutText: {
    fontSize: 16,
    color: '#8d6e63',
    fontWeight: 'bold',
  },
});
