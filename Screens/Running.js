import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking, Button, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { auth } from '../firebase'

const Strength = () => {
  return (
    <View>
        
        <Text style = {{textAlign: 'center', marginTop: 30, fontSize: 25, fontWeight: 'bold'}}>How to Effectly Run:</Text>
        <Image source={require('../images/running.jpg')} style = {styles.fitnessButton} />

        <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Tips for Running</Text>
        </View>
        <Text style = {{textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
          .  - It is important to warm up before hand and make sure that you are feeling hydrated and loose.
          </Text>
          <Text style = {{textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
          .  - A good runner will strengthen their whole body, since the whole body is moving whenever you run.
          </Text>
          <Text style = {{textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
          .  - You may run outside, or on a treadmill.
          </Text>
        <Button title = "Link to video on Running Tips"onPress = {() => Linking.openURL('https://www.youtube.com/watch?v=kVnyY17VS9Y')} color = 'orange'>Link to Video</Button>

        <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Types of Running</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5, textDecorationLine: 'underline'}}>Long Distance: </Text>
        <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           continuous running over at least 3 km.
          </Text>
        </View>
        <Button title = "Link to video on Long Distance"onPress = {() => Linking.openURL('https://www.youtube.com/watch?v=NBSlI90vMaI')} color = 'orange'>Link to Video</Button>
        <View style = {{flexDirection: 'row'}}>
          <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5, textDecorationLine: 'underline'}}>Speed Running: </Text>
        <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           High pace for a short time.
          </Text>
        </View>
        <Button title = "Link to video on Speed Running"onPress = {() => Linking.openURL('https://www.youtube.com/watch?v=6m_fjNhRhkY')} color = 'orange'>Link to Video</Button>
        <View style = {{flexDirection: 'row'}}>
          <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5, textDecorationLine: 'underline'}}>Recovery Run: </Text>
        <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           Short run at an easy pace.
          </Text>
        </View>
        <Button title = "Link to video on Recovery Run"onPress = {() => Linking.openURL('https://www.youtube.com/watch?v=XyPVi92DqxU')} color = 'orange'>Link to Video</Button>
       




        
    </View>
  )
}

export default Strength

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
     button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    TitleText: {
        fontWeight: 'bold', 
        justifyContent: 'center', 
        alignItems: 'center'

    },
    fitnessButton: {
      width: '100%',
        // width: 75,
        height: 170,
        marginLeft: 10,
        marginBottom: 10,
        resizeMode: 'cover',
    },
  })