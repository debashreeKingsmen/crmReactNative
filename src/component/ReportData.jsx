import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  PermissionsAndroid,
   Platform, 
   Alert

} from 'react-native';
import React, {useState} from 'react';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';

const ReportData = () => {
  const [data, setData] = useState([
    {sl_no: 1, name: 'John Doe', email: 'doe@example.com', outbound_calls: 25},
    {sl_no: 2, name: 'Jane Smith', email: 'smith@example.com', outbound_calls: 30},
    {sl_no: 3, name: 'Robert Johnson', email: 'robert@example.com', outbound_calls: 15},
    {sl_no: 4, name: 'Emily Davis', email: 'davis@example.com', outbound_calls: 40},
    {sl_no: 5, name: 'Michael Brown', email: 'brown@example.com', outbound_calls: 22},
    {sl_no: 6, name: 'Sarah Wilson', email: 'wilson@example.com', outbound_calls: 18},
    {sl_no: 7, name: 'David Lee', email: 'lee@example.com', outbound_calls: 35},
    {sl_no: 8, name: 'Laura White', email: 'white@example.com', outbound_calls: 28},
    {sl_no: 9, name: 'James Anderson', email: 'anderson@example.com', outbound_calls: 20},
    {sl_no: 10, name: 'Olivia Martinez', email: 'olivia@example.com', outbound_calls: 27},
    {sl_no: 11, name: 'Daniel Harris', email: 'harris@example.com', outbound_calls: 24},
    {sl_no: 12, name: 'Sophia Clark', email: 'sophia@example.com', outbound_calls: 32},
    {sl_no: 13, name: 'Benjamin Hall', email: 'benjamin@example.com', outbound_calls: 29},
    {sl_no: 14, name: 'Ava Lewis', email: 'ava@example.com', outbound_calls: 21},
    {sl_no: 15, name: 'Matthew Walker', email: 'matthew@example.com', outbound_calls: 26},
    {sl_no: 16, name: 'Chloe Young', email: 'chloe@example.com', outbound_calls: 33},
    {sl_no: 17, name: 'Anthony Allen', email: 'anthony@example.com', outbound_calls: 19},
    {sl_no: 18, name: 'Grace King', email: 'grace@example.com', outbound_calls: 34},
    {sl_no: 19, name: 'Andrew Scott', email: 'andrew@example.com', outbound_calls: 31},
    {sl_no: 20, name: 'Ella Green', email: 'ella@example.com', outbound_calls: 23},
   
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  const itemsPerPage = 5;

  const filteredData = data.filter(
    item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);


  // const requestStoragePermission = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         {
  //           title: 'Storage Permission Required',
  //           message: 'App needs access to your storage to download the file',
  //           buttonNeutral: 'Ask Me Later',
  //           buttonNegative: 'Cancel',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       return granted === PermissionsAndroid.RESULTS.GRANTED;
  //     } catch (err) {
  //       console.warn(err);
  //       return false;
  //     }
  //   } else {
  //     return true;
  //   }
  // };


  // const exportToCSV = async () => {
  //   const isPermitted = await requestStoragePermission();
  //   if (!isPermitted) return;
  
  //   const header = 'S.No,Name,Email,Outbound Calls\n';
  //   const csvRows = currentData
  //     .map(row => `${row.sl_no},${row.name},${row.email},${row.outbound_calls}`)
  //     .join('\n');
  //   const csvString = header + csvRows;
  
  //   const path = `${RNFS.DownloadDirectoryPath}/ReportData.csv`;
  //   RNFS.writeFile(path, csvString, 'utf8')
  //     .then(() => Alert.alert('Success', `CSV file saved to:\n${path}`))
  //     .catch(err => console.log('CSV export error:', err));
  // };
  
  // const exportToExcel = async () => {
  //   const isPermitted = await requestStoragePermission();
  //   if (!isPermitted) return;
  
  //   const worksheet = XLSX.utils.json_to_sheet(currentData);
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
  //   const excelData = XLSX.write(workbook, {type: 'binary', bookType: 'xlsx'});
  
  //   const buffer = new ArrayBuffer(excelData.length);
  //   const view = new Uint8Array(buffer);
  //   for (let i = 0; i < excelData.length; ++i) {
  //     view[i] = excelData.charCodeAt(i) & 0xff;
  //   }
  
  //   const path = `${RNFS.DownloadDirectoryPath}/ReportData.xlsx`;
  //   RNFS.writeFile(path, buffer, 'ascii')
  //     .then(() => Alert.alert('Success', `Excel file saved to:\n${path}`))
  //     .catch(err => console.log('Excel export error:', err));
  // };
  
  

  const renderItem = ({item}) => (
    <View style={styles.row}>
      <Text style={{width: 45}}>{item.sl_no}</Text>
      <Text style={{width: 120}}>{item.name}</Text>
      <Text style={{width: 80}}>{item.email}</Text>
      <Text style={{width: 92}}>{item.outbound_calls}</Text>
    </View>
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <TextInput
          style={styles.input}
          placeholder="Search here.."
          value={searchQuery}
          onChangeText={text => {
            setSearchQuery(text);
            setCurrentPage(1); // Reset to first page on search
          }}
        />
          <TouchableOpacity onPress={toggleMenu}>
          <Image
            source={require('../../assets/app.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <View style={styles.menu}>
          {/* <TouchableOpacity>
            <Text style={styles.menuItem}>Manage Column</Text>
          </TouchableOpacity> */}
          <TouchableOpacity>
            <Text style={styles.menuItem}>Download Format</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={exportToCSV}
          >
            <Text style={styles.menuItem}>Export as CSV</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={exportToExcel}
          >
            <Text style={styles.menuItem}>Export as Excel</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView horizontal>
        <View style={styles.listContainer}>
          <View style={styles.header}>
            <Text style={[styles.headerText, {width: 45}]}>S.No</Text>
            <Text style={[styles.headerText, {width: 120}]}>Name</Text>
            <Text style={[styles.headerText, {width: 80}]}>Email</Text>
            <Text style={[styles.headerText, {width: 92}]}>Outbound Calls</Text>
          </View>
          <FlatList
            data={currentData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>

      <View style={styles.paginationContainer}>
        <TouchableOpacity
          onPress={handlePrev}
          disabled={currentPage === 1}
          style={[styles.pageButton, currentPage === 1 && styles.disabledBtn]}>
          <Text>Prev</Text>
        </TouchableOpacity>

        <View style={styles.pageNumber}>
          <Text style={styles.activePage}>{currentPage}</Text>
        </View>

        <TouchableOpacity
          onPress={handleNext}
          disabled={currentPage === totalPages}
          style={[styles.pageButton, currentPage === totalPages && styles.disabledBtn]}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
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
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    cursor: 'pointer',
    top: 50,
    right: 11,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 1,
  },
  menuTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    paddingVertical: 5,
    fontSize: 16,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 0,
    marginHorizontal: 1,
    paddingVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
  },
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    gap: 10,
  },
  pageButton: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  disabledBtn: {
    opacity: 0.5,
  },
  pageNumber: {
    backgroundColor: '#8cd3f2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  activePage: {
    color: '#000',
    fontWeight: 'bold',
  },
});
