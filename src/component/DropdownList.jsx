import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';

const DropdownList = () => {
  const [category, setCategory] = useState('');

  const categories = [
    {key: 'ALL', value: 'All'},
    {key: 'EMAIL', value: 'EMAIL'},
    {key: 'CALL', value: 'CALL'},
  ];

  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingTop: 10,
      }}>
      <Text>DropdownList</Text>
      <SelectList
        setSelected={setCategory}
        data={categories}
        placeholder="Select Option"
        defaultOption={{key: 'ALL', value: 'All'}}
      />
    </View>
  );
};

export default DropdownList;

const styles = StyleSheet.create({});
