import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const AddPropertyScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Property</Text>

      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Developer Name" />
        <TextInput style={styles.input} placeholder="Project Name" />
      </View>

      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Property Type" />
        <TextInput style={styles.input} placeholder="Construction Status" />
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={{ color: '#fff' }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={{ color: '#8d6e63' }}>Close</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  input: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  saveBtn: { backgroundColor: '#795548', padding: 12, borderRadius: 8, marginRight: 10 },
  cancelBtn: { backgroundColor: '#fddede', padding: 12, borderRadius: 8 },
});

export default AddPropertyScreen;
