import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Workout from './Workout';
import Profile from './Profile';
import Goals from './Goals';

const Stack = createNativeStackNavigator();

var tangerineColor = '#fcae1e';
var topText = "Welcome to EZ Fitness!";
var sizeOfIcons = 35;

const Tab = createBottomTabNavigator();

//Displays Bottom Tab Navigator, which is used throughout the application
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
          name= "Workout"
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

const Home = () => {
  return (
      <MyTabs />
  )
}

export default Home

// const styles = StyleSheet.create({})