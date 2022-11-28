import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import Workout from './Screens/Workout';
import Profile from './Screens/Profile';
import Goals from './Screens/Goals';
import Home from './Screens/Home';
import SignUpScreen from './Screens/SignUpScreen';

const Stack = createNativeStackNavigator();

var tangerineColor = '#fcae1e';
var topText = "Welcome to EZ Fitness!";
var sizeOfIcons = 35;

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Workout"
      screenOptions={{
        tabBarActiveTintColor: '#fcae1e',
        tabBarStyle: {height: 100}
      }}
    >
      <Tab.Screen
        name= {topText}
        component={Workout}
        options={{
          tabBarLabel: 'Workout',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={sizeOfIcons} />
          ),
        }}
      />
      <Tab.Screen
        name="Goals"
        component={Goals}
        options={{
          tabBarLabel: 'Goals',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-check" color={color} size={sizeOfIcons} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={sizeOfIcons} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen options={{headerShown: false}} name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
      </Stack.Navigator>
      {/* <MyTabs /> */}
    </NavigationContainer>
  );
}

export default App;