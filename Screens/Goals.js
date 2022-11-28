import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native'
import React from 'react'

import AddaGoal from './AddaGoal';

// let [modalVisible, setModalVisible] = React.useState(false);

const Goals = () => {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style  ={styles.container}
    behavior="padding">
      <View style = {{borderBottomWidth: 2, marginBottom: 30}}>
        <Text style = {{fontSize: 25, fontWeight: 'bold', marginTop: 20}}>List of Goals:</Text>
      </View>

      <Button title ="Add Goal" color = 'orange'>Add a Goal</Button>







    </View>
      // <View style={styles.buttonContainer}> </View>
  )
}

export default Goals

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
},
  displayText: {
    fontSize: 25,
    fontWeight: 'bold',
},
buttonContainer: {

},
buttonText:{

},
button: {

}

})