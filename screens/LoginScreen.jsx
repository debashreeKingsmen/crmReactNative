import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const navigation = useNavigation(); 

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  const validateEmail = (text) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(text);
  };

  const handleLogin = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter an email address');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    // successfully navigate
    Alert.alert('Success', 'Logging in...', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Home'), // ✅ Navigate to Home
      },
    ]);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}
    >
      <View style={{ paddingHorizontal: 25 }}>
        {/* Logo */}
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'black',
          }}
        >
          <Image
            source={require('../assets/newLogo.png')}
            style={{ width: 80, height: 80, resizeMode: 'contain' }}
          />
        </View>

        {/* Email */}
        <View style={{ marginBottom: 15 }}>
          <Text style={{ color: '#666', marginBottom: 5 }}>Email ID</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 10,
              paddingVertical: 6,
              paddingHorizontal: 10,
              fontSize: 16,
            }}
            keyboardType="email-address"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password */}
        <View style={{ marginBottom: 15 }}>
          <Text style={{ color: '#666', marginBottom: 5 }}>Password</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 10,
              paddingHorizontal: 15,
            }}
          >
            <TextInput
              style={{ flex: 1, paddingVertical: 6, fontSize: 16 }}
              secureTextEntry={!showPassword}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={
                  showPassword
                    ? require('../assets/eye.png')
                    : require('../assets/hidden.png')
                }
                style={{ width: 24, height: 24, tintColor: 'black' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#8d6e63',
            padding: 12,
            borderRadius: 10,
            alignItems: 'center',
            marginBottom: 20,
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
