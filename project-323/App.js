import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import ExampleTwo from './table.js';
import Test from './test.js';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
export default function App() {
  return (
    <>
    <ExampleTwo />
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/*<Test />*/}
    </View>
  </>);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
