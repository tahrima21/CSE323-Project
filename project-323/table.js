import { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NativeRouter, Route, Link, Routes } from "react-router-native";

const ExampleTwo = () =>  {
  const [p1bt, setP1bt] = useState(0);
  const [p2bt, setP2bt] = useState(0);
  const [p3bt, setP3bt] = useState(0);
  const [p1at, setP1at] = useState(0);
  const [p2at, setP2at] = useState(0);
  const [p3at, setP3at] = useState(0);
  const [tq, setTq] = useState(0);


  let btarray = [p1bt,p2bt,p3bt]
  let sum = 0;
  for(let i=0; i<=2;i++){
    sum += parseInt(btarray[i]);
  }
  console.log(sum);


    const procs = [
    {name: 'P1', at: p1at},
    {name: 'P2', at: p2at},
    {name: 'P3', at: p3at}]

    procs.sort((a,b)=>{
      if(a.at<b.at){return -1}
      else if(a.at>b.at){return 1}
      else {return 0}
    })

    console.log(procs);
    const sortedP = procs.map(x=>x.name);
    const demo = sortedP
    const ganttBar = []
    for(let i=0;i<=((sum/2)-1);i++){
      demo.push(sortedP[i])
    }
    /*let k=0;
    const final = []
    while((p1bt+p2bt+p3bt) != 0){
      if(p1bt != 0){
        final.push(demo[k]);
        p1bt-tq;
      }
      k++
      if(p2bt != 0){
        final.push(demo[k]);
        p2bt-tq;
      }
      k++
      if(p3bt != 0){
        final.push(demo[k]);
        p3bt-tq;
      }
      k++
    }*/
    //console.log(sum);
    const sortedAt = procs.map(x=>x.at);
    console.log(demo);
    //console.log(ganttBar)
    //console.log(sortedAt)



    //console.log(ganttBar);




    return (
      <KeyboardAwareScrollView
      style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{flex: 1, padding: 16, marginBottom:-255}}
      scrollEnabled={true}
    >
      <>
      <Text style={styles.text}>Round Robin</Text>
      <View style={styles.container}>
      <View>
      <Link to="/">
      <Image source = {require('./assets/icons8-double-left-24.png')} //adding images in the background
      style={{height: 20, width: 30, marginBottom: 15}}
      />
      </Link>
      </View>
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

      <View style={{paddingBottom: 30, paddingTop: 40}}>
      <Text style={{padding: 16, paddingBottom: 20}}>Time Quantum: </Text>
      <View style={{paddingLeft: 16}}>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          textAlign: 'center',
          width: 100,
        }}
        onChangeText={(e) => setTq(e)}

      />
      </View>
      </View>
      <View style={{flex: 1, padding: 16, paddingBottom: 150, paddingTop: -5, backgroundColor: '#fff', marginBottom:-250}}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={demo} flexArr={[1, 1,1]} style={styles.head} textStyle={styles.text}/>
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
