import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking, Button, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { auth } from '../firebase'

const Strength = () => {
  return (
    <View>
        
        <Text style = {{textAlign: 'center', marginTop: 30, fontSize: 25, fontWeight: 'bold'}}>How to Improve Strength:</Text>
        <Image source={require('../images/strength.png')} style = {styles.fitnessButton} />

        <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Warming Up!</Text>
        </View>
        <Text style = {{textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
          Its important to warm up as it prepares your body for the physical demands of stength training. This will also help in reducing risk of injury.
          </Text>
        <Button title = "Link to video on Warming Up"onPress = {() => Linking.openURL('https://www.youtube.com/watch?v=MncQw-H3MPU')} color = 'orange'>Link to Video</Button>

        <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Types of Strength Exercise</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5, textDecorationLine: 'underline'}}>Upper Body: </Text>
        <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           consists of arms, shoulders, and chest.
          </Text>
        </View>
        <Button title = "Link to video on Upper Body"onPress = {() => Linking.openURL('https://www.youtube.com/watch?v=acp77RhVzMM')} color = 'orange'>Link to Video</Button>
        <View style = {{flexDirection: 'row'}}>
          <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5, textDecorationLine: 'underline'}}>Lower Body: </Text>
        <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           consists of glute, hip, leg, and knee.
          </Text>
        </View>
        <Button title = "Link to video on Lower Body"onPress = {() => Linking.openURL('https://www.youtube.com/watch?v=B4dJIcF_vJI')} color = 'orange'>Link to Video</Button>

        <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Recovery!</Text>
        </View>
        <Text style = {{textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
          Your body needs time to recover, which will help grow your muscles even stronger! If you don't recover, you may see more joint and muscle pain.
          </Text>
        <Button title = "Link to video on Recovery"onPress = {() => Linking.openURL('https://www.youtube.com/watch?v=XX-WT_L5SQw')} color = 'orange'>Link to Video</Button>
       




        
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
        height: 150,
        marginLeft: 10,
        marginBottom: 10,
        resizeMode: 'cover',
    },
  })