import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking, Button, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { auth } from '../firebase'

const Yoga = () => {
  return (
    <View>
                {/* View Style represents a new bullet point.
        Every button represents a link to a video or website
        Every Text Stlye represents a portion of text in the bullet point */}
        <Text style = {{textAlign: 'center', marginTop: 30, fontSize: 25, fontWeight: 'bold'}}>Tips and Tricks for Yoga:</Text>
        <Image source={require('../images/yoga.jpg')} style = {styles.fitnessButton} />

        <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Why do Yoga?</Text>
        </View>
        <Text style = {{textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
          To simplfy, yoga improves your strength, flexibility, and balance. It also helps improving your mood, and can keep you calm.
          </Text>

        <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Positions</Text>
        </View>
        <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           There are way too many positions to list, but it's important to understand how to set it up each position.
          </Text>
          <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           Firstly, set the tone by keeping your area clean, and calm.
          </Text>
          <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           Next, get a comfortable yoga mat, as well as proper workout clothes, that can allow you to move with ease.
          </Text>
          <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           Finally, one done, make sure to hydrate and recover if you did hurt yourself during the process.
          </Text>
        <Button title = "Link to video on Yoga Tips and Tricks"onPress = {() => Linking.openURL('https://www.youtube.com/watch?v=nWLTtdfhif8')} color = 'orange'>Link to Video</Button>
        <Button title = "Link to video on Different Positions"onPress = {() => Linking.openURL('https://www.youtube.com/watch?v=v7AYKMP6rOE')} color = 'orange'>Link to Video</Button>




        
    </View>
  )
}

export default Yoga

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