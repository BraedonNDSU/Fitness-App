import { Modal, View, Text, TextInput, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

export default function AddaGoal(props){

    let [todo, setTodo] = React.useState("");
    return(
        <ImageBackground source={require("../images/background.png")} style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
          }}>
        <View style  ={styles.container}>
            <Text style = {{marginBottom: 25, fontWeight: 'bold'}}>Enter Goal Below!</Text>
            <Text>Be as descripted as possible! :)</Text>

            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Goal:"
                placeholderTextColor= '#949494'
                value={todo}
                onChangeText={setTodo}
                style={styles.input}
                />
            </View>

            <View style = {{flexDirection: 'row'}}>
                {/* <Button title = "Cancel" onPress = {props.onClose}></Button> */}

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress = {props.onClose}
                style={{        backgroundColor: 'red',
                width: '100%',
                padding: 15,
                borderRadius: 10,
                alignItems: 'center'}}
                >
                <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress = {() => {
                    props.addToDo(todo);
                    setTodo("");
                    props.onClose();
                }}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Add Goal!</Text>
                </TouchableOpacity>
            </View>

                            {/* <Button title = "OK" onPress = {() => {
                    props.addToDo(todo);
                    setTodo("");
                    props.onClose();
                }}></Button> */}



            </View>
        </View>
        </ImageBackground>
    )
}

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