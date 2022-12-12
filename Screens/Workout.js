import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {navigate} from 'react-navigation';

const Workout = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style = {{fontWeight: 'bold', marginBottom: 10, fontSize: 20}}>
                Select a Workout Below!
            </Text>
            <Image source={require('../images/selectWorkout.jpg')} style = {styles.fitnessButton} />
            <Text style = {{marginBottom: 20, fontSize: 15}}>
                Each option will bring up different exercises!
            </Text>
            <View style = {{flexDirection: 'row'}}>

            {/* Each TouchableOpacity represents a different form of exercise */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("Strength")}}
                style={{        backgroundColor: 'orange',
                padding: 0,
                margin: 0,
                width: 175,
                padding: 50,
                borderRadius: 10,
                alignItems: 'center',
              marginRight: 10,
            marginLeft: 10}}
                >

                <Text style={styles.buttonText}>Strength</Text>
                <MaterialCommunityIcons name="weight-lifter" color='white' size={25}/>
                
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("Running")}}
                style={{        backgroundColor: 'orange',
                width: 175,
                padding: 50,
                borderRadius: 10,
                alignItems: 'center',
                marginLeft: 10,
              marginRight: 10}}
                >
                <Text style={styles.buttonText}>Running</Text>
                <MaterialCommunityIcons name="run-fast" color='white' size={25}/>
                </TouchableOpacity>
            </View>
            </View>


            <View style = {{flexDirection: 'row', marginTop: 10, marginBottom: 20}}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("Yoga")}}
                style={{        backgroundColor: 'orange',
                width: 175,
                padding: 50,
                borderRadius: 10,
                alignItems: 'center',
                marginLeft: 10,
              marginRight: 10}}
                >
                <Text style={styles.buttonText}>Yoga</Text>
                <MaterialCommunityIcons name="yoga" color='white' size={25}/>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("Nutrition")}}
                style={{        backgroundColor: 'orange',
                width: 175,
                padding: 50,
                borderRadius: 10,
                alignItems: 'center',
                marginLeft: 10,
              marginRight: 10}}
                >
                <Text style={styles.buttonText}>Nutrition</Text>
                <MaterialCommunityIcons name="food-apple" color='white' size={25}/>
                
                </TouchableOpacity>
            </View>
            </View>
    </View>
  )
}

export default Workout

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  inputContainer: {
      width: '80%'
  },

  input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 20,
      borderRadius: 10,
      marginTop: 25,
  },
  buttonContainer: {
      // width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
  },
  button: {
      // backgroundColor: 'orange',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      
  },
  buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderwidth: 2,
  },
  buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
      marginBottom: 5
      
  },
  buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
  },
  fitnessButton: {
    width: '100%',
      // width: 75,
      height: 75,
      marginLeft: 10,
      marginBottom: 10
  },
  background: {
      opacity: 100
  }
})