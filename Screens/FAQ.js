import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking, Button, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { auth } from '../firebase'

const FAQ = () => {
    const navigation = useNavigation()
  return (
    <View>
        
        <Text style = {{textAlign: 'center', marginTop: 50, fontSize: 25, fontWeight: 'bold'}}>Frequently Asked Questions:</Text>
        <Image source={require('../images/faq.jpg')} style = {styles.fitnessButton} />

        <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>What is EZ Fitness?</Text>
        </View>
        <Text style = {{textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
          EZ fitness is a simple and easy-to-understand fitness application for beginners.
          </Text>
          <Text style = {{textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
          The purpose of EZ fitness is to provide a non-intimidating application that anyone and everyone can navigate!
          </Text>

        <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>How do I add a Goal?</Text>
        </View>
        <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           In the "Goal" section, there should be an orange button labeled "Add a Goal"
          </Text>
          <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           Once there, type an input into the textbox, and then click on "Add Goal!".
          </Text>

          <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons style = {{marginTop: 17}} name="circle-small" color='black' size={25}/>
            <Text style = {{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>How do I navigate "Workout"</Text>
        </View>
        <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           There are 4 textboxes, labeled based on their content.
          </Text>
          <Text style = {{flexDirection: 'row', textAlign: 'left', fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
           Click on one of the 4 orange boxes, which will open up more information, along with helpful videos :)
          </Text>
          

      <TouchableOpacity
        onPress={() => {navigation.navigate("Profile")}}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go Back</Text>
        
      </TouchableOpacity>
       




        
    </View>
  )
}

export default FAQ

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
        marginTop: 40,
        textAlign: 'center',
        marginLeft: 75
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
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