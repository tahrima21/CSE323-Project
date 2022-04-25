import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import ExampleTwo from './table.js';
import Test from './test.js';
import FCFS from './fcfs.js'
import Type from './Component/Type'
import Navbar from './navbar.jsx'
//import Routes from './routes.js'
//import Navigator from './drawer.js'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
export default function App() {
  return (
    <>

    {/*<Navbar />*/}
    <Type />
    {/*<FCFS />*/}
    {/*<ExampleTwo />*/}

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
