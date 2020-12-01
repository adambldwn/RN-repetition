// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from './pages/First';
import Second from './pages/Second';

const Stack = createStackNavigator();


function Router() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        // initialRouteName="SecondPage"
        screenOptions={{
            headerShown: false,
            gestureEnabled: false
        }}
      >

        <Stack.Screen name="FirstPage" component={First} options={{ title: 'Gönderiler' }}/>
        <Stack.Screen name="SecondPage" component={Second} />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default Router;