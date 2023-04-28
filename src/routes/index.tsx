import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home/home';
import HeroDetail from '../screens/HeroDetail';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Home'
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HeroDetail" component={HeroDetail} />
    </Stack.Navigator>
  );
}

export default Routes;