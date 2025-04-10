import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const ReportData = () => {
  const [data, setData] = useState([
    {
      sl_no: 1,
      name: 'John Doe',
      email: 'doe@example.com',
      outbound_calls: 25,
    },
    {
      sl_no: 2,
      name: 'Jane Smith',
      email: 'smith@example.com',
      outbound_calls: 30,
    },
    {
      sl_no: 3,
      name: 'Robert Johnson',
      email: 'robert@example.com',
      outbound_calls: 15,
    },
    {
      sl_no: 4,
      name: 'Emily Davis',
      email: 'davis@example.com',
      outbound_calls: 40,
    },
    {
      sl_no: 5,
      name: 'Michael Brown',
      email: 'brown@example.com',
      outbound_calls: 22,
    },
    {
      sl_no: 6,
      name: 'Sarah Wilson',
      email: 'wilson@example.com',
      outbound_calls: 18,
    },
    {
      sl_no: 7,
      name: 'David Lee',
      email: 'lee@example.com',
      outbound_calls: 35,
    },
    {
      sl_no: 8,
      name: 'Laura White',
      email: 'white@example.com',
      outbound_calls: 28,
    },
    {
      sl_no: 9,
      name: 'James Anderson',
      email: 'anderson@example.com',
      outbound_calls: 20,
    },
    {
      sl_no: 10,
      name: 'Olivia Martinez',
      email: 'olivia@example.com',
      outbound_calls: 27,
    },
    {
      sl_no: 11,
      name: 'William Carter',
      email: 'carter@example.com',
      outbound_calls: 33,
    },
    {
      sl_no: 12,
      name: 'Sophia Moore',
      email: 'moore@example.com',
      outbound_calls: 26,
    },
    {
      sl_no: 13,
      name: 'Daniel Harris',
      email: 'harris@example.com',
      outbound_calls: 19,
    },
    {
      sl_no: 14,
      name: 'Emma Walker',
      email: 'walker@example.com',
      outbound_calls: 41,
    },
    {
      sl_no: 15,
      name: 'Alexander Hall',
      email: 'hall@example.com',
      outbound_calls: 23,
    },
    {
      sl_no: 16,
      name: 'Mia Lewis',
      email: 'lewis@example.com',
      outbound_calls: 37,
    },
    {
      sl_no: 17,
      name: 'Ethan Young',
      email: 'young@example.com',
      outbound_calls: 21,
    },
    {
      sl_no: 18,
      name: 'Charlotte Allen',
      email: 'allen@example.com',
      outbound_calls: 39,
    },
    {
      sl_no: 19,
      name: 'Benjamin Scott',
      email: 'scott@example.com',
      outbound_calls: 29,
    },
    {
      sl_no: 20,
      name: 'Amelia King',
      email: 'king@example.com',
      outbound_calls: 31,
    },
  ]);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.row}>
        <Text>{(index + 1).toString()}</Text>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.outbound_calls}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.listContainer}>
          <View style={styles.header}>
            <Text style={[styles.headerText, {width: 45}]}>S.No</Text>
            <Text style={[styles.headerText, {width: 120}]}>Name</Text>
            <Text style={[styles.headerText, {width: 80}]}>Email</Text>
            <Text style={[styles.headerText, {width:  92}]}>Outbound Calls</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ReportData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  listContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  headerText: {
    fontSize: 16,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0,
    marginHorizontal: 1,
    elevation: 1,
    borderRadius: 3,
    paddingVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
  },
});
