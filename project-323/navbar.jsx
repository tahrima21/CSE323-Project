import { StyleSheet, View, TextInput, Text } from 'react-native';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Type from './Component/Type'
import ExampleTwo from './table.js';
import FCFS from './fcfs.js'
const Stack = createStackNavigator();
const Navbar = ()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#C70066' } }}>

      <Stack.Screen name="FCFS" component={FCFS}/>
      <Stack.Screen name="RR" component={ExampleTwo}/>

   </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    top: -350,
    margin: 20
  },
});

export default Navbar;
