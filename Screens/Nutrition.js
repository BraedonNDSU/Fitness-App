import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking, Button, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from '../firebase'

const Nutrition = () => {
  return (
    <View>
        {/* View Style represents a new bullet point.
        Every button represents a link to a video or website
        Every Text Stlye represents a portion of text in the bullet point */}
        <Text style = {{textAlign: 'center', marginTop: 30, fontSize: 25, fontWeight: 'bold'}}>Importance of Nutrition:</Text>
        <Image source={require('../images/nutrition.jpg')} style = {styles.fitnessButton} />

        <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Benefits of Nutrition</Text>
        </View>
        <Text style = {{textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
          Eating healthy is extremely important, as it gives the body the necessary nutrients to function. It also goes well with exercise, as it improves physical performance.
          </Text>
          <Text style = {{textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
          It also supports the immune system and helps with your mental health.
          </Text>
        <Button title = "Why Eating Right is Important"onPress = {() => Linking.openURL('https://www.youtube.com/watch?v=XMcab1MFaLc')} color = 'orange'>Link to Video</Button>

        <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>How to Eat Healthy</Text>
        </View>
        <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           MyPlate: A visual representation of how much healthy food you should consume throughout a day.
          </Text>
          <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           Click the link below to set up a MyPlate of your own! :)
          </Text>
        <Image source={require('../images/myPlate.png')} style = {{      width: 250,
        // width: 75,
        height: 150,
        marginLeft: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode : 'center'}} />

        <Button title = "Link to learn More on MyPlate"onPress = {() => Linking.openURL('https://www.myplate.gov/eat-healthy/what-is-myplate')} color = 'orange'></Button>
       




        
    </View>
  )
}

export default Nutrition

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