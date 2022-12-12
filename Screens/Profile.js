import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { auth } from '../firebase';

const Profile = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen")
      })
      .catch(error => alert(error.message))
  }
  //Profile has three functions, 
  // 1. FAQ 
  // 2. Tutorial
  // 3. Logout
  return (
    <View style={styles.container}>
      
      <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginBottom: 10}}>
           Welcome User!
          </Text>

          <Image source={require('../images/profilePic.png')} resizeMode = "contain" resizeMethod='scale'  style = {{width: 100, height: 100}}/>

      <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 40}}>
           Any Questions?
          </Text>
      <TouchableOpacity
        onPress={() => {navigation.navigate("FAQ")}}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Frequently Asked Questions</Text>
        
      </TouchableOpacity>

      <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold'}}>
           Confused on how to use EZ Fitness?
          </Text>
      <TouchableOpacity
        onPress={() => {navigation.navigate("NavigatePage1")}}
        style={styles.button}
      >
        <Text style={styles.buttonText}>How to Navigate</Text>
        
      </TouchableOpacity>


      <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold'}}>
           Want to Sign out?
      </Text>
      <Text style = {{ fontWeight: 'bold'}}>Current Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.buttonSignout}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
     button: {
      backgroundColor: 'orange',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 30
    },
    buttonSignout: {
      backgroundColor: '#8D4004',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 30
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
  })