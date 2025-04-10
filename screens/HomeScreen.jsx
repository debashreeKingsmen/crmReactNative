import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, View} from 'react-native';


function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      {/* <Button
        style={{marginTop: 10}}
        onPress={() => navigation.navigate('Report Chart')}>
        Check Analysis
      </Button> */}
      {/* <Button
        style={{marginTop: 10}}
        onPress={() => navigation.navigate('Profile')}
      /> */}
      <Button
        style={{marginTop: 10}}
        onPress={() => navigation.navigate('Report Table')}>
        Check Report
      </Button>
    </View>
  );
}

export default HomeScreen;
