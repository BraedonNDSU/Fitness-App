import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking, Button, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { auth } from '../firebase'

const NavigatePage1 = () => {
    //PAGE 1 of 7
    const navigation = useNavigation()
  return (
    <View style = {styles.container}>
        
        <Text style = {{textAlign: 'center', fontSize: 25, fontWeight: 'bold', textDecorationLine: 'underline'}}>Welcome to EZ Fitness!</Text>

        <Text style = {{textAlign: 'center', marginTop: 20, fontSize: 25, fontWeight: 'bold'}}>We appreicate you for taking the time to learn about this great App! :)</Text>

        <Text style = {{textAlign: 'center', marginTop: 20, fontSize: 25, fontWeight: 'bold'}}>Click "Next" to go through our quick tutorial!</Text>

        <View style = {{flexDirection: 'row'}}>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("Profile")}}
                style={{        backgroundColor: 'red',
                width: '100%',
                padding: 15,
                borderRadius: 10,
                marginLeft: 15,
                alignItems: 'center'}}
                >
                <Text style={styles.buttonText}>Leave</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("NavigatePage2")}}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
            </View>
    </View>
  )
}

export default NavigatePage1

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
        width: 75,
        height: 75,
        marginLeft: 10
    }
})