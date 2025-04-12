import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const notifications = [
  {
    id: '1',
    title: 'New Lead Assigned',
    message: 'You have been assigned a new lead.',
    type: 'lead',
    icon: require('../assets/check.png'),
  },
  {
    id: '2',
    title: 'Meeting Scheduled',
    message: 'A meeting with Jane Smith is scheduled.',
    type: 'meeting',
    icon: require('../assets/calendar.png'),
  },
  {
    id: '3',
    title: 'Deal Closed',
    message: 'Congratulations! You closed the deal.',
    type: 'success',
    icon: require('../assets/check.png'),
  },

  {
    id: '4',
    title: 'Lead Converted',
    message: 'Lead Tom Brown has been successfully converted to a client.',
    type: 'converted',
    icon: require('../assets/send.png'),
  },
];

const getBackgroundColor = type => {
  switch (type) {
    case 'success':
      return '#E1F5FE';
    case 'converted':
      return '#FFEBEE';
    case 'meeting':
      return '#FFF3E0';
    case 'lead':
      return '#FFF8E1';
    default:
      return '#F5F5F5';
  }
};

const getStatusColor = type => {
  switch (type) {
    case 'success':
      return '#2196F3';
    case 'converted':
      return '#E53935';
    case 'meeting':
      return '#FB8C00';
    case 'lead':
      return '#F9A825';
    default:
      return '#9E9E9E';
  }
};

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonRead}>
          <Text>Read</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonUnread}>
          <Text>Unread</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>New</Text>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.card,
              {backgroundColor: getBackgroundColor(item.type)},
            ]}>
            <View style={styles.iconWrapper}>
              <Image source={item.icon} style={styles.icon} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={[styles.title, {color: getStatusColor(item.type)}]}>
                {item.title}
              </Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <View style={styles.dot} />
          </View>
        )}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  buttonRead: {
    padding: 10,
    backgroundColor: '#169976',
    borderRadius: 5,
  },
  buttonUnread: {
    padding: 10,
    backgroundColor: '#E53935',
    borderRadius: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
