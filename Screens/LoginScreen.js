import { useNavigation } from '@react-navigation/native'
import {Alert, Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { auth } from '../firebase'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
            Alert.alert("Welcome", "You are now logged in!")
        })
        .catch(error =>alert(error.message))
    }

    return(

        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <Text style = {{fontWeight: 'bold', marginBottom: 20, fontSize: 20}}>
                Login to EZ Fitness!
            </Text>
            <View style = {{flexDirection: 'row'}}>
                <Image source={require('../images/workout1.jpg')} style = {styles.fitnessImage} />
                <Image source={require('../images/workout2.jpg')} style = {styles.fitnessImage} />
            </View>
            <View style = {{flexDirection: 'row', marginTop: 10, marginBottom: 20}}>
                
                <Image source={require('../images/workout3.jpg')} style = {styles.fitnessImage} />
                <Image source={require('../images/workout4.jpg')} style = {styles.fitnessImage} />
            </View>
            <View style={styles.inputContainer}>

                <TextInput
                placeholder="Email:"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
                />

                <TextInput
                placeholder="Password:"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style = {{flexDirection: 'row'}}>
                <Text>Don't have an account? </Text>
                <Text style = {{color: 'orange'}} onPress={() => navigation.replace("SignUpScreen")}>Sign up!</Text>
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