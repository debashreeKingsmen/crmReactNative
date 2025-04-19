import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 48) / 2; 

export default function AdminSetting() {
  const [data, srtData] = useState([
    {
      id: '1',
      title: 'Users',
      icons: require('../../assets/user.png'),
    },
    {
      id: '2',
      title: 'Roles',
      icons: require('../../assets/setting.png'),
    },
    {
      id: '3',
      title: 'Change images',
      icons: require('../../assets/exchange.png'),
    },
    {
      id: '4',
      title: 'Custom Fields',
      icons: require('../../assets/database.png'),
    },
    {
      id: '5',
      title: 'Validations',
      icons: require('../../assets/software-testing.png'),
    },
    {
      id: '6',
      title: 'Table Fields',
      icons: require('../../assets/table-of-content.png'),
    },
    {
      id: '7',
      title: 'Module',
      icons: require('../../assets/folder.png'),
    },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.iconWrapper}>
                <Image source={item.icons} style={styles.icon} />
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#F1EFEC',
    borderRadius: 10,
    padding: 16,
    width: (Dimensions.get('window').width - 48) / 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#60B512',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  icon: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
});
