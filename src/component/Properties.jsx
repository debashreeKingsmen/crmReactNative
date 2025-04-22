import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Properties() {
    const navigation = useNavigation();
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
  heading: {
    fontSize: 24,
    color: '#210F37',
  },

  imagePlus: {
    width: 26,
    height: 26,
    borderRadius: 15,
  },
});
