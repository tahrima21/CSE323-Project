import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import FCFS from './fcfs.js'
import ExampleTwo from './table.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "fcfs" component = {FCFS} title = "FCFS" initial = {true} />
         <Scene key = "rr" component = {ExampleTwo} title = "RR" />
      </Scene>
   </Router>
)
export default Routes
