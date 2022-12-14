import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking, Button, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { auth } from '../firebase'

const NavigatePage5 = () => {
    //PAGE 5 of 7
    const navigation = useNavigation()
  return (
    <View style = {styles.container}>
        
        <Text style = {{textAlign: 'center', fontSize: 25, fontWeight: 'bold', textDecorationLine: 'underline'}}>Using "Goals"</Text>

        <Text style = {{textAlign: 'center', marginTop: 20, marginBottom: 20, fontSize: 25, fontWeight: 'bold'}}>Enter in a goal using the text box shown below</Text>

        <Image source={require('../images/tutorial4.jpg')} resizeMode = "contain" resizeMethod='scale'  style = {{width: 250, height: 400}}/>

        <Text style = {{textAlign: 'center', marginTop: 20, fontSize: 25, fontWeight: 'bold'}}>Once done, click on "Add Goal" to add it to your list.</Text>

        <View style = {{flexDirection: 'row'}}>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("NavigatePage4")}}
                style={{        backgroundColor: 'red',
                width: '100%',
                padding: 15,
                borderRadius: 10,
                marginLeft: 15,
                alignItems: 'center'}}
                >
                <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("NavigatePage6")}}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
            </View>
    </View>
  )
}

export default NavigatePage5

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
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
        width: 125,
        marginLeft: 10,
        marginRight: 10

    },
    button: {
        backgroundColor: 'orange',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'orange',
        borderwidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    fitnessImage: {
        flex: 1,
        width: 250,
        height: 50,
        resizeMode: 'contain'
    }
})