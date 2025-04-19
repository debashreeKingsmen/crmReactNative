import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const InfoItem = ({icon, text}) => (
  <View style={styles.infoItem}>
    <Text style={styles.icon}>{icon}</Text>
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('Demo');
  const [lastName, setLastName] = useState('USer');
  const [phone, setPhone] = useState('1234567890');
  const [email, setEmail] = useState('demo@kingsmenrealty.com');

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <View style={{alignItems: 'center', position: 'relative'}}>
          {/* Profile Image */}
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/62.jpg'}}
            style={styles.profileImage}
          />

          {/* profile edit */}
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.editIconWrapper}>
            <Image
              source={require('../assets/pen.png')}
              style={styles.editIcon}
            />
          </TouchableOpacity>

          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.role}>Area Sales Manager</Text>
          <Text style={styles.rm}>3 RM</Text>
        </View>
      </View>

      {/* Info Items */}
      <View style={styles.infoContainer}>
        <InfoItem icon="📞" text={phone} />
        <InfoItem icon="📧" text={email} />
      </View>

      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
            />
            <TextInput style={styles.input} disabled={true} placeholder="Email" value={email} />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => setModalVisible(false)}>
                <Text style={{color: '#fff', fontSize: 15}}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}>
                <Text style={{color: '#8d6e63', fontSize: 15}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8d6e63',
    paddingTop: 40,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 10,
  },
  editIconWrapper: {
    position: 'absolute',
    right: 128,
    top: 12,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 2,
    elevation: 3,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 2,
  },
  rm: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  icon: {
    fontSize: 18,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000080',
    padding: 20,
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  saveBtn: {
    backgroundColor: '#8d6e63',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  cancelBtn: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#8d6e63',
  },
});
