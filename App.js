import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AppNavContainer from './src/navigations';
import HomeNavigator from './src/navigator/HomeNavigator';
import Home from './src/screens/Home';
import BatalYa from './src/screens/BatalYa';
import PesananKu from './src/screens/PesananKu';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Naviator" component={HomeNavigator}/>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Pesanan" component={PesananKu}/>
        <Stack.Screen name = "Batal" component={BatalYa}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;