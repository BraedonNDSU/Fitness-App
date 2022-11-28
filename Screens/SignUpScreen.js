import { useNavigation } from '@react-navigation/native'
import {Alert, ImageBackground} from 'react-native'
import React, {useEffect, useState} from 'react'
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { auth } from '../firebase'

import fit1 from '../images/workout1.jpg';

var color = 'orange';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        if (confirmPassword == password)
        {
            auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Welcome to EZ Fitness:', fullName);
                Alert.alert("Congrats!", "You are now registered!")
                // console.log('Registered with:', user.email);
            })
            .catch(error =>alert(error.message))
        }
        else
        {
            Alert.alert("Passwords do not match", "Make sure both passwords are the same")
        }
        
    }
    
    return(
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            {/* <Text style = {{fontWeight: 'bold', fontSize: 20}}>
                Welcome to EZ Fitness!
            </Text> */}
            <Text style = {{marginTop: 50, fontWeight: 'bold', fontSize: 20}}>
                Create a new Account!
            </Text>
            <Text style = {{marginBottom: 20, fontSize: 20}}>
                Join our community today!
            </Text>
            <View style={styles.inputContainer}>

                <TextInput
                placeholder="Enter Full Name:"
                value={fullName}
                onChangeText={text => setFullName(text)}
                style={styles.input}
                />

                <TextInput
                placeholder="Enter Email:"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
                />

                <TextInput
                placeholder="Enter Password:"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
                />

                <TextInput
                placeholder="Confirm Password:"
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                style={styles.input}
                secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>

                <TouchableOpacity
                onPress={handleSignUp}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

            </View>

            <View style = {{flexDirection: 'row'}}>
                <Text>Already have an account? </Text>
                <Text style = {{color: 'orange'}} onPress={() => navigation.replace("LoginScreen")}>Sign in!</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

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
        marginBottom: 20
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
        borderColor: '#0782F9',
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
    },
    background: {
        opacity: 100
    }
})