import { View, Button, Text, Modal, SafeAreaView, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import InlineTextButton from './InlineTextButton';
import React from 'react'
import AddaGoal from './AddaGoal';
import { useNavigation } from '@react-navigation/native'
import {auth, db} from "../firebase";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore";
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Goals = (navigation) => {
  let [modalVisible, setModalVisible] = React.useState(false);
  let [isLoading, setIsLoading] = React.useState(true);
  let [isRefreshing, setIsRefreshing] = React.useState(false);
  let [goals, setGoals] = React.useState([]);

  //Loads the lists of goals based on the user credentials
  let loadGoalList = async () => {
    const q = query(collection(db, "todos"), where("userId", "==", auth.currentUser.uid));

    const querySnapshot = await getDocs(q);
    let goals = [];
    querySnapshot.forEach((doc) => {
      let goal = doc.data();
      goal.id = doc.id;
      goals.push(goal);
    });

    setGoals(goals);
    setIsLoading(false);
    setIsRefreshing(false);
  };

  if (isLoading) {
    loadGoalList();
  }

  //adds checkmark to goal
  let checkGoalItem = (item, isChecked) => {
    const goalRef = doc(db, 'todos', item.id);
    setDoc(goalRef, { completed: isChecked }, { merge: true });
  };

  //Removes goal from the database
  let deleteGoal = async (GoalId) => {
    await deleteDoc(doc(db, "todos", GoalId));
    let updatedToDos = [...goals].filter((item) => item.id != GoalId);
    setGoals(updatedToDos);
  };

  //Shows the user what goal they have
  let renderToDoItem = ({item}) => {
    return (
      <View style={{
        borderWidth: 5,
        borderColor: "orange",
        borderRadius: 0,
        padding: 15,
        color: 'orange',
        marginBottom: 10
      }}>
        <View>
          <BouncyCheckbox
          style = {{marginBottom: 10}}
            isChecked={item.complated}
            size={25}
            fillColor="orange"
            unfillColor="#FFFFFF"
            text={<Text style={{fontWeight: 'bold', color: 'orange', fontSize: 15}}>{item.text}</Text>}
            iconStyle={{ borderColor: "#258ea6" }}
            onPress={(isChecked) => { checkGoalItem(item, isChecked)}}
          />
        </View>
        <View>
                <TouchableOpacity
                onPress = {() => deleteGoal(item.id)}
                style={{fontWeight: 'bold',
                alignItems: 'center'}}
                >
                <Text style={{color: 'red', fontWeight: 'bold'}}>Delete Goal</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  }

  let showToDoList = () => {
    return (
      <FlatList
        data={goals}
        refreshing={isRefreshing}
        onRefresh={() => {
          loadGoalList();
          setIsRefreshing(true);
        }}
        renderItem={renderToDoItem}
        keyExtractor={item => item.id} />
    )
  };

  //Loads content to the return
  let showContent = () => {
    return (
      <View>
        {isLoading ? <ActivityIndicator size="large" /> : showToDoList() }
        <Button 
          title="Add Goal" 
          onPress={() => setModalVisible(true)} 
          color="#fb4d3d" />
      </View>
    );
  };

  //Adds the goal, using the AddaGoal.js
  let addGoal = async (todo) => {
    let toDoToSave = {
      text: todo,
      completed: false,
      userId: auth.currentUser.uid
    };
    const docRef = await addDoc(collection(db, "todos"), toDoToSave);

    toDoToSave.id = docRef.id;

    let updatedToDos = [...goals];
    updatedToDos.push(toDoToSave);

    setGoals(updatedToDos);
  };

  return (
    
    <View style  ={styles.container}
    behavior="padding">

      {/* Used for swapping to AddaGoal.js */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
          <AddaGoal
            onClose={() => setModalVisible(false)}
            addGoal={addGoal}/>

        </Modal>
      <View style = {{borderBottomWidth: 2, marginTop: 250, marginBottom: 20, flexDirection: 'row'}}>
          <Text title = "List of Goals" style = {{fontSize: 25, fontWeight: 'bold', marginTop: 20}}>List of Goals: </Text>
          <MaterialCommunityIcons style = {{marginTop: 22}} name="calendar-check-outline" color='black' size={25}/>
      </View>
      <Image source={require('../images/goal.jpg')} style = {{      width: 150,
      height: 90}} />

      <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Add a Goal!</Text>
                </TouchableOpacity>
      </View>
      {showContent()}
      







    </View>
      // <View style={styles.buttonContainer}> </View>
  )
}

export default Goals

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