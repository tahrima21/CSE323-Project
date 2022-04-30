import { useState } from 'react';
import { StyleSheet, View, TextInput, Text,Image, ImageBackground, ScrollView, } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Link } from "react-router-native";


const FCFS = () =>  {
  const [p1bt, setP1bt] = useState(0);
  const [p2bt, setP2bt] = useState(0);
  const [p3bt, setP3bt] = useState(0);
  const [p1at, setP1at] = useState(0);
  const [p2at, setP2at] = useState(0);
  const [p3at, setP3at] = useState(0);

  let parray = ['P1','P2','P3']
  let atarray = [parseInt(p1at),parseInt(p2at),parseInt(p3at)]
  let btarray = [p1bt,p2bt,p3bt]

  let sum = 0;
  for(let i=0; i<=2;i++){
    sum += parseInt(btarray[i]);
  }
  console.log(sum);
    const procs = [
    {name: 'P1', at: p1at, bt: p1bt},
    {name: 'P2', at: p2at, bt: p2bt},
    {name: 'P3', at: p3at, bt: p3bt}]

    procs.sort((a,b)=>{
      if(a.at<b.at){return -1}
      else if(a.at>b.at){return 1}
      else {return 0}
    })

    console.log(procs);
    const sortedP = procs.map(x=>x.name);

    console.log(sortedP)
    const sortedB = procs.map(y=>y.bt);

    const burstTime = []
    for(let i=0;i<=2;i++){
      burstTime.push(parseInt(sortedB[i]))
    }

    const processesInfo = atarray
    .map((item, index) => {
      return {
        job: parray[index],
        at: item,
        bt: btarray[index],
      };
    })
    .sort((obj1, obj2) => {
      if (obj1.at > obj2.at) {
        return 1;
      }
      if (obj1.at < obj2.at) {
        return -1;
      }
      return 0;
    });

  let finishTime= [];
  let ganttChartInfo = [];

  const solvedProcessesInfo = processesInfo.map((process, index) => {
    if (index === 0 || process.at > finishTime[index - 1]) {
      finishTime[index] = process.at + process.bt;

      ganttChartInfo.push({
        job: process.job,
        start: parseInt(process.at),
        stop: parseInt(finishTime[index]),
      });
    } else {
      finishTime[index] = parseInt(finishTime[index - 1]) + parseInt(process.bt);

      ganttChartInfo.push({
        job: process.job,
        start: parseInt(finishTime[index - 1]),
        stop: parseInt(finishTime[index]),
      });
    }

    return {
      ...process,
      ft: finishTime[index],
      tat: finishTime[index] - process.at,
      wat: finishTime[index] - process.at - process.bt,
    };
  });

  console.log(solvedProcessesInfo)
  console.log(ganttChartInfo)
  const ss = ganttChartInfo.map(x=>x.start);
  ss.push(sum)
  console.log(ss);
  const avgwt = solvedProcessesInfo.map(x=>x.wat)
  console.log(avgwt);
  let awt=0;
  for(let i = 0; i<=2;i++){
    awt += parseInt(avgwt[i]);
  }
  awt = awt/3;
  console.log(awt);




    return (


          <>

      <View style={styles.outerContainer}>
      <ImageBackground source = {require('./assets/jojo2.jpg')}
      style={styles.image}
      />
      <KeyboardAwareScrollView contentContainerStyle= {{
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16, marginBottom:-450
          }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={true}>

     <Text style={styles.text}>---</Text>

      <View style={styles.container}>
      <Text style={styles.topText}>FCFS</Text>

      <View>
      <Link to="/">
      <Image source = {require('./assets/icons8-double-left-24.png')}
      style={{height: 20, width: 30, marginBottom: 15}}
      />
      </Link>
      </View>
        <Table borderStyle={{borderWidth: 2}}>
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



      <View style={{width: '85%', height: '80%',flex: 1, padding: 20, paddingBottom: 50, paddingTop: -5, backgroundColor: '#fff', marginBottom:20, borderRadius: 25,}}>
        <Table borderStyle={{borderWidth: 2,  }}>
          <Row data={sortedP} flexArr={[1,1,1]} style={styles.head} textStyle={styles.text}/>
        </Table>
        <Table borderStyle={{borderStyle: 'hidden'}}>
          <Row data={ss} flexArr={[4,4,4]} style={styles.ss} textStyle={{textAlign: 'left'}}/>
        </Table>
        <Text style={{paddingTop: 10, fontWeight: '700' }}>Process: {solvedProcessesInfo.map(x=>x.job).join('  ')}</Text>
        <Text style={{paddingTop: 10, fontWeight: '700' }}>TAT:         {solvedProcessesInfo.map(x=>x.tat).join('    ')}</Text>
        <Text style={{paddingTop: 10, fontWeight: '700' }}>WT:          {solvedProcessesInfo.map(x=>x.wat).join('    ')}</Text>
        <Text style={{paddingTop: 10, fontWeight: '700' }}>AWT:       {awt}</Text>
      </View>
      </KeyboardAwareScrollView>
      </View>
      </>


    )

}

const styles = StyleSheet.create({
  outerContainer: {width: '100%', height: '100%'},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',

  },

  container: { width: '85%', height: '80%', flex: 1, padding: 20, paddingTop: 30, backgroundColor: '#fff', marginBottom:-300 , borderRadius: 25, },
  head: {  height: 40,  backgroundColor: '#cccccc'  },
  ss: {height: 30, backgroundColor: '#fff', paddingBottom:10},
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' ,fontWeight: '600'},
  topText: {textAlign: 'center'  , fontSize: 20,fontWeight: '900',shadowColor: '#808080', shadowOffset: {width: -4, height: 4}, shadowOpacity: 20,
  shadowRadius: 2,}
});

export default FCFS;
