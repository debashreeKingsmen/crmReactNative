import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import axios from 'axios';

export default function Properties() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isFocused) {
      fetchProperties();
    }
  }, [isFocused]);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://192.168.0.106:5000/properties');
      setProperties(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  const deleteProperty = async (id) => {
    console.log('Deleting property with id:', id); 
    try {
      const response =  await axios.delete(`http://192.168.0.106:5000/properties/${id}`);
      console.log('Delete response:', response.data);
      Alert.alert('Deleted', 'Property deleted successfully!');
      fetchProperties(); // Refresh list
    } catch (error) {
      console.error('Error deleting property:', error.response ? error.response.data : error.message);
      Alert.alert('Error', 'Failed to delete property!');
    }
  };

  const confirmDelete = (id) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Delete', onPress: () => deleteProperty(id)},
    ]);
  };

  const filteredProperties = properties.filter(property =>
    property.projectName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('EditProperty', {property: item})}>
          <Image
            source={require('../../assets/edit.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => confirmDelete(item._id)}>
          <Image
            source={require('../../assets/delete.png')}
            style={[styles.icon, {marginLeft: 10}]}
          />
        </TouchableOpacity>
      </View>

      {/* All Property Details */}
      <Text style={styles.itemText}><Text style={styles.label}>Developer Name:</Text> {item.developerName}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Project Name:</Text> {item.projectName}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Total Land Parcel:</Text> {item.totalLandParcel}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Total Units:</Text> {item.totalUnits}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Unit Details:</Text> {item.unitDetails}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Basic Price:</Text> {item.basicPrice}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>All Inclusive Price:</Text> {item.allInclusivePrice}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Open Space:</Text> {item.openSpace}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Amenities:</Text> {item.amenities}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Club House Area:</Text> {item.clubHouseArea}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Number of Club House:</Text> {item.numberOfClubHouse}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Landmark 1:</Text> {item.landmark1}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Landmark 2:</Text> {item.landmark2}</Text>
      <Text style={styles.itemText}><Text style={styles.label}>Landmark 3:</Text> {item.landmark3}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Properties</Text>

        <TouchableOpacity onPress={() => navigation.navigate('AddProperty')}>
          <Image
            source={require('../../assets/add.png')}
            style={styles.imagePlus}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.parent}>
        <TextInput
          style={styles.input}
          placeholder="Search Project Name.."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredProperties}
          keyExtractor={(item) => item._id?.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imagePlus: {
    width: 30,
    height: 30,
  },
  parent: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    position: 'relative',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 14,
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
  },
  iconsContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
