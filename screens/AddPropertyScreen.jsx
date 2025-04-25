import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const AddPropertyScreen = ({navigation}) => {
  const [propertyType, setPropertyType] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Property</Text>
      </View>

      <TextInput style={styles.input} placeholder="Developer Name" />
      <TextInput style={styles.input} placeholder="Project Name" />

      <TextInput style={styles.input} placeholder="Property Type" />

      <TextInput
        style={styles.input}
        placeholder="Select Construction Status"
      />

      {/* <TextInput
        style={styles.input}
        placeholder="Select Construction Status"
      /> */}
      <TextInput style={styles.input} placeholder="Total Land Parcel" />
      <TextInput style={styles.input} placeholder="Total Number Of units" />

      <TextInput style={styles.input} placeholder="Unit Details (Size&Price)" />
      <TextInput style={styles.input} placeholder="Basic Price" />

      <TextInput style={styles.input} placeholder="All Inclusive Price" />
      <TextInput style={styles.input} placeholder="Possession Date" />

      <TextInput style={styles.input} placeholder="Open Space" />
      <TextInput style={styles.input} placeholder="Amenities" />

      <TextInput style={styles.input} placeholder="Club-House Area" />
      <TextInput style={styles.input} placeholder="Number Of Club-House" />

      <TextInput style={styles.input} placeholder=" Select Region" />
      <TextInput style={styles.input} placeholder="Land Mark-1" />
      <TextInput style={styles.input} placeholder="Land Mark-2" />
      <TextInput style={styles.input} placeholder="Land Mark-3" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveBtn}>
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
