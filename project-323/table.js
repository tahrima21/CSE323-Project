import React, { useState, Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const ExampleTwo = () =>  {
  const [p1bt, setP1bt] = useState(0);
  const [p2bt, setP2bt] = useState(0);
  const [p3bt, setP3bt] = useState(0);
  const [p1at, setP1at] = useState(0);
  const [p2at, setP2at] = useState(0);
  const [p3at, setP3at] = useState(0);
  const [p1p, setP1p] = useState(0);
  const [p2p, setP2p] = useState(0);
  const [p3p, setP3p] = useState(0);

    //const animals = [{name: 'pigs'}, {name: 'goats'}, {name: 'sheep'}];

  //const count = animals.push({name: 'cows'});
  //console.log(count);
  // expected output: 4
  //console.log(animals);
  // expected output: Array ["pigs", "goats", "sheep", "cows"]

  //animals.push('chickens', 'cats', 'dogs');
  //console.log(animals);


  console.log([p1bt,p1at,p1p,p2bt,p2at,p2p]);
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={['Process', 'Burst Time', 'Arrival Time','Priority']} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={['P1', 'P2', 'P3']} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={[[<TextInput onChangeText={(e) => setP1bt(e)}/>, <TextInput onChangeText={(e) => setP1at(e)}/>, <TextInput onChangeText={(e) => setP1p(e)}/>],[<TextInput onChangeText={(e) => setP2bt(e)}/>, <TextInput onChangeText={(e) => setP2at(e)}/>, <TextInput onChangeText={(e) => setP2p(e)}/>],[<TextInput onChangeText={(e) => setP3bt(e)}/>, <TextInput onChangeText={(e) => setP3at(e)}/>, <TextInput onChangeText={(e) => setP3p(e)}/>]]} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});

export default ExampleTwo;
