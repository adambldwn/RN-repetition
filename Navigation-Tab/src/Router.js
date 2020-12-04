// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Main, Post, Friends} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainComponent() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="MainPage" component={Main}/>
      <Stack.Screen name="PostPage" component={Post}/>
    </Stack.Navigator>
  )
}

function Router() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="PostPage"
        tabBarOptions={{
          activeTintColor: "purple"
        }}
      >
        <Tab.Screen name="FriendsPage" component={Friends} options={{title: "Arkadaşlar"}}/>
        <Tab.Screen name="MainPage" component={MainComponent} options={{title: "Ana Sayfa"}}/>
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

export default Router;