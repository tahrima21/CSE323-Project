import { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const FCFS = () =>  {
  const [p1bt, setP1bt] = useState(0);
  const [p2bt, setP2bt] = useState(0);
  const [p3bt, setP3bt] = useState(0);
  const [p1at, setP1at] = useState(0);
  const [p2at, setP2at] = useState(0);
  const [p3at, setP3at] = useState(0);


  const pbt = [p1bt,p2bt,p3bt];
  const pbtarray = []
  for(let i=0; i<=2;i++){
    pbtarray.push(parseInt(pbt[i]))
  }

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

    console.log(sortedP)





    return (

      <KeyboardAwareScrollView
      style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{flex: 1, padding: 16, marginBottom:-250}}
      scrollEnabled={true}
    >
      <>
      <Text style={styles.text}>FCFS</Text>
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


      <View style={{flex: 1, padding: 16, paddingBottom: 150, paddingTop: -5, backgroundColor: '#fff', marginBottom:-250}}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={sortedP} flexArr={pbtarray ? pbtarray : [1,1,1]} style={styles.head} textStyle={styles.text}/>
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

export default FCFS;
