import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {deleteMyPost, myFetchGetRequest} from '../src/component/MyFetchApiReq';

export default function FeedScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await myFetchGetRequest();
    console.log('data', res);
    setData(res);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Post using API</Text>
        <Image source={require('../assets/add.png')} style={styles.imagePlus} />
      </View>

      {data?.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title || 'No Title'}</Text>
          {/* <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Image
              source={require('../assets/delete.png')}
              style={styles.imagePlus}
            />
          </TouchableOpacity> */}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },

  imagePlus: {
    width: 26,
    height: 26,
    borderRadius: 15,
  },
  heading: {
    fontSize: 24,
    color: '#210F37',
  },
  card: {
    width: '100%',
    backgroundColor: '#E1EEBC',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});
