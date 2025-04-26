import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const AddPropertyScreen = ({navigation}) => {
  const [developerName, setDeveloperName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [totalLandParcel, setTotalLandParcel] = useState('');
  const [totalUnits, setTotalUnits] = useState('');
  const [unitDetails, setUnitDetails] = useState('');
  const [basicPrice, setBasicPrice] = useState('');
  const [allInclusivePrice, setAllInclusivePrice] = useState('');
  const [openSpace, setOpenSpace] = useState('');
  const [amenities, setAmenities] = useState('');
  const [clubHouseArea, setClubHouseArea] = useState('');
  const [numberOfClubHouse, setNumberOfClubHouse] = useState('');
  const [landmark1, setLandmark1] = useState('');
  const [landmark2, setLandmark2] = useState('');
  const [landmark3, setLandmark3] = useState('');

  const handleSave = async () => {
    try {
      const response = await axios.post(
        'http://192.168.0.106:5000/add-property',
        {
          developerName,
          projectName,
          totalLandParcel,
          totalUnits,
          unitDetails,
          basicPrice,
          allInclusivePrice,
          openSpace,
          amenities,
          clubHouseArea,
          numberOfClubHouse,
          landmark1,
          landmark2,
          landmark3,
        },
      );

      console.log('Saved Successfully:', response.data);
      alert('Property Saved Successfully!');
      navigation.goBack();
    } catch (error) {
      console.error('Error saving property:', error);
      alert('Failed to save property. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Property</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Developer Name"
        value={developerName}
        onChangeText={setDeveloperName}
      />
      <TextInput
        style={styles.input}
        placeholder="Project Name"
        value={projectName}
        onChangeText={setProjectName}
      />

      <TextInput
        style={styles.input}
        placeholder="Total Land Parcel"
        value={totalLandParcel}
        onChangeText={setTotalLandParcel}
      />
      <TextInput
        style={styles.input}
        placeholder="Total Number Of units"
        value={totalUnits}
        onChangeText={setTotalUnits}
      />

      <TextInput
        style={styles.input}
        placeholder="Unit Details (Size&Price)"
        value={unitDetails}
        onChangeText={setUnitDetails}
      />

      <TextInput
        style={styles.input}
        placeholder="Basic Price"
        value={basicPrice}
        onChangeText={setBasicPrice}
      />

      <TextInput
        style={styles.input}
        placeholder="All Inclusive Price"
        value={allInclusivePrice}
        onChangeText={setAllInclusivePrice}
      />

      <TextInput
        style={styles.input}
        placeholder="Open Space"
        value={openSpace}
        onChangeText={setOpenSpace}
      />
      <TextInput
        style={styles.input}
        placeholder="Amenities"
        value={amenities}
        onChangeText={setAmenities}
      />

      <TextInput
        style={styles.input}
        placeholder="Club-House Area"
        value={clubHouseArea}
        onChangeText={setClubHouseArea}
      />
      <TextInput
        style={styles.input}
        placeholder="Number Of Club-House"
        value={numberOfClubHouse}
        onChangeText={setNumberOfClubHouse}
      />

      <TextInput
        style={styles.input}
        placeholder="Land Mark-1"
        value={landmark1}
        onChangeText={setLandmark1}
      />
      <TextInput
        style={styles.input}
        placeholder="Land Mark-2"
        value={landmark2}
        onChangeText={setLandmark2}
      />
      <TextInput
        style={styles.input}
        placeholder="Land Mark-3"
        value={landmark3}
        onChangeText={setLandmark3}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={{color: '#fff'}}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => navigation.goBack()}>
          <Text style={{color: '#C5172E'}}>Close</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20},
  header: {
    backgroundColor: '#8d6e63',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  saveBtn: {
    backgroundColor: '#795548',
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  picker: {
    height: 50,
    width: '100%',
  },

  cancelBtn: {backgroundColor: '#fddede', padding: 12, borderRadius: 8},
});

export default AddPropertyScreen;
