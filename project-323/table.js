import { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Image, ImageBackground, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {  Link } from "react-router-native";

const ExampleTwo = () =>  {
  const [p1bt, setP1bt] = useState(0);
  const [p2bt, setP2bt] = useState(0);
  const [p3bt, setP3bt] = useState(0);
  const [p1at, setP1at] = useState(0);
  const [p2at, setP2at] = useState(0);
  const [p3at, setP3at] = useState(0);
  const [tq, setTq] = useState(0);

  let parray = ['P1','P2','P3']
  let atarray = [parseInt(p1at),parseInt(p2at),parseInt(p3at)]
  let btarray = [parseInt(p1bt),parseInt(p2bt),parseInt(p3bt)]
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
    const sortedA = procs.map(x=>x.at);
    const sortedP = procs.map(x=>x.name);
    const sortedB = procs.map(x=>x.bt);


    const processesInfo = atarray
    .map((item, index) => {
      return {
        job: parray[index],
        at: item,
        bt: btarray[index],
      };
    })
    .sort((obj1, obj2) => {
      if (obj1.at > obj2.at) return 1;
      if (obj1.at < obj2.at) return -1;
      return 0;
    });
  const details = [];
  const solvedProcessesInfo = [];
  const ganttChartInfo = [];

  const readyQueue = [];
  let currentTime = processesInfo[0].at;
  const unfinishedJobs = [...processesInfo];

  const remainingTime = processesInfo.reduce((acc, process) => {
    acc[process.job] = parseInt(process.bt);
    return acc;
  }, {});

  readyQueue.push(unfinishedJobs[0]);
  while (
    Object.values(remainingTime).reduce((acc, cur) => {
      return parseInt(acc) + parseInt(cur);
    }, 0) &&
    unfinishedJobs.length > 0
  ) {
    if (readyQueue.length === 0 && unfinishedJobs.length > 0) {
      // Previously idle
      readyQueue.push(unfinishedJobs[0]);
      currentTime = parseInt(readyQueue[0].at);
    }

    const processToExecute = readyQueue[0];

    if (parseInt(remainingTime[processToExecute.job]) <= parseInt(tq)) {
      // Burst time less than or equal to time quantum, execute until finished
      const remainingT = parseInt(remainingTime[processToExecute.job]);
      remainingTime[processToExecute.job] -= parseInt(remainingT);
      const prevCurrentTime = parseInt(currentTime);
      currentTime += parseInt(remainingT);

      ganttChartInfo.push({
        job: processToExecute.job,
        start: prevCurrentTime,
        stop: currentTime,
      });
    } else {
      remainingTime[processToExecute.job] -= parseInt(tq);
      const prevCurrentTime = parseInt(currentTime);
      currentTime += parseInt(tq);

      ganttChartInfo.push({
        job: processToExecute.job,
        start: prevCurrentTime,
        stop: currentTime,
      });
    }
    const processToArriveInThisCycle = processesInfo.filter((p) => {
      return (
        p.at <= currentTime &&
        p !== processToExecute &&
        !readyQueue.includes(p) &&
        unfinishedJobs.includes(p)
      );
    });

    // Push new processes to readyQueue
    readyQueue.push(...processToArriveInThisCycle);

    // Requeueing (move head/first item to tail/last)
    readyQueue.push(readyQueue.shift());

    // When the process finished executing
    if (remainingTime[processToExecute.job] === 0) {
      const indexToRemoveUJ = unfinishedJobs.indexOf(processToExecute);
      if (indexToRemoveUJ > -1) {
        unfinishedJobs.splice(indexToRemoveUJ, 1);
      }
      const indexToRemoveRQ = readyQueue.indexOf(processToExecute);
      if (indexToRemoveRQ > -1) {
        readyQueue.splice(indexToRemoveRQ, 1);
      }

      solvedProcessesInfo.push({
        ...processToExecute,
        ft: currentTime,
        tat: currentTime - processToExecute.at,
        wat: currentTime - processToExecute.at - processToExecute.bt,
      });
      details.push({
        Process: processToExecute.job,
        tat: currentTime - processToExecute.at,
        wt: currentTime - processToExecute.at - processToExecute.bt,
      })
    }
  }

  // Sort the processes arrival time and then by job name
  solvedProcessesInfo.sort((obj1, obj2) => {
    if (obj1.at > obj2.at) return 1;
    if (obj1.at < obj2.at) return -1;
    if (obj1.job > obj2.job) return 1;
    if (obj1.job < obj2.job) return -1;
    return 0;
  });



  console.log(solvedProcessesInfo);
  console.log(details);
  console.log(ganttChartInfo);
  const demo = ganttChartInfo.map(x=>x.job)
  const ss = ganttChartInfo.map(x=>x.start);
  ss.push(sum)
  console.log(ss);
  const flexss = []
  for(let i=0;i<=ss.length;i++){
    flexss.push(1)
  }
  console.log(flexss);

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
      <Text style={styles.topText}>ROUND ROBIN</Text>
      <View>
      <Link to="/">
      <Image source = {require('./assets/icons8-double-left-24.png')} //adding images in the background
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
                  flexArr={[1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>

      <View style={{paddingBottom: 30, paddingTop: 40}}>
      <Text style={{padding: 16, paddingBottom: 10, fontWeight: '700' }}>TIME QUANTUM: </Text>
      <View style={{paddingLeft: 16}}>
      <TextInput
        style={{
          height: 40,
          borderWidth: 2,
          textAlign: 'center',
          width: 100,
        }}
        onChangeText={(e) => setTq(e)}

      />
      </View>
      </View>
      <View style={{width: '85%', height: '80%', flex: 1, padding: 10, paddingTop: -5, backgroundColor: '#fff', marginBottom:20, borderRadius: 25}}>
        <Table borderStyle={{borderWidth: 2}}>
          <Row data={demo} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text}/>
        </Table>
        <Table borderStyle={{borderStyle: 'hidden'}}>
          <Row data={ss} flexArr={flexss ? flexss : [1,1,1]} style={styles.ss} textStyle={{textAlign: 'left'}}/>
        </Table>
        <Text style={{paddingTop: 10, fontWeight: '700' }}>Process: {details.map(x=>x.Process).join('  ')}</Text>
        <Text style={{paddingTop: 10, fontWeight: '700' }}>TAT:         {details.map(x=>x.tat).join('    ')}</Text>
        <Text style={{paddingTop: 10, fontWeight: '700' }}>WT:          {details.map(x=>x.wt).join('    ')}</Text>
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
  container: { width: '85%', height: '80%', flex: 1, padding: 20, paddingTop: 30, backgroundColor: '#fff', marginBottom:-245 ,borderRadius: 25,},
  head: {  height: 40,  backgroundColor: '#cccccc'  },
  ss: {height: 30, backgroundColor: '#fff',paddingBottom:10},
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center', fontWeight: '600' },
  topText: {textAlign: 'center'  , fontSize: 17,fontWeight: '900',shadowColor: '#808080',shadowOffset: {width: -4, height: 4}, shadowOpacity: 20, shadowRadius: 2,}
});

export default ExampleTwo;
