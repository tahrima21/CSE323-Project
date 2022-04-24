import React, { useState, Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import bigInt from 'big-integer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const ExampleTwo = () =>  {
  const [p1bt, setP1bt] = useState(0);
  const [p2bt, setP2bt] = useState(0);
  const [p3bt, setP3bt] = useState(0);
  const [p1at, setP1at] = useState(0);
  const [p2at, setP2at] = useState(0);
  const [p3at, setP3at] = useState(0);
  const [tq, setTq] = useState(0);

    //const animals = [{name: 'pigs'}, {name: 'goats'}, {name: 'sheep'}];

  //const count = animals.push({name: 'cows'});
  //console.log(count);
  // expected output: 4
  //console.log(animals);
  // expected output: Array ["pigs", "goats", "sheep", "cows"]

  //animals.push('chickens', 'cats', 'dogs');
  //console.log(animals);

  //console.log(animals[0])
  //console.log([p1bt,p1at,p1p,p2bt,p2at,p2p]);
  //const p1
  let btarray = [p1bt,p2bt,p3bt]
  let sum = 0;
  for(let i=0; i<=2;i++){
    //let sum = btarray[i] + btarray[i+1] + btarray[i+2]
    sum += bigInt(btarray[i]);
  }
  console.log(sum);
  let atsort = [p1at,p2at,p3at];
  for(let k=0;k<=2;k++){
    bigInt(atsort[k]);
  }
  atsort.sort(function(a,b){
    return a-b;
  })
  console.log(atsort);
  //console.log([1,2,3])
  let pArray = [];
  let process = ['P1','P2','P3']
  for(let j=0;j<=atsort.length;j++){
    if(p1at==atsort[j]){
      pArray.push(process[j]);
    }
    if(p2at==atsort[j]){
      pArray.push(process[j]);
    }
    if(p3at==atsort[j]){
      pArray.push(process[j]);
    }
  }
  console.log(pArray);

    return (
      <KeyboardAwareScrollView
      style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{flex: 1, padding: 16, marginBottom:-250}}
      scrollEnabled={true}
    >
      <>
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={['Process', 'Burst Time', 'Arrival Time']} flexArr={[1, 1,1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={['P1', 'P2', 'P3']} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={[
              [<TextInput style={{textAlign: 'center'}} onChangeText={(e) => setP1bt(e)}/>,
              <TextInput style={{textAlign: 'center'}} onChangeText={(e) => setP1at(e)}/>],
              [<TextInput style={{textAlign: 'center'}} onChangeText={(e) => setP2bt(e)}/>,
                <TextInput style={{textAlign: 'center'}} onChangeText={(e) => setP2at(e)}/>],
                [<TextInput style={{textAlign: 'center'}} onChangeText={(e) => setP3bt(e)}/>,
                  <TextInput style={{textAlign: 'center'}} onChangeText={(e) => setP3at(e)}/>]]}
                  flexArr={[1, 1,]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>

      <View style={{paddingBottom: 30, paddingTop: 50}}>
      <Text style={{padding: 16, paddingBottom: 20}}>Time Quantum: </Text>
      <View style={{paddingLeft: 16}}>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          textAlign: 'center',
          width: 100,
        }}

      />
      </View>
      </View>
      <View style={{flex: 1, padding: 16, paddingBottom: 150, paddingTop: -5, backgroundColor: '#fff', marginBottom:-250}}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={['Process', 'Burst Time', 'Arrival Time','Time Quantum']} flexArr={[1, 1,1]} style={styles.head} textStyle={styles.text}/>
        </Table>
      </View>
      </>
      </KeyboardAwareScrollView>
    )

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', marginBottom:-245 },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});

export default ExampleTwo;
