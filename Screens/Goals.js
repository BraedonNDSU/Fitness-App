import { View, Button, Text, Modal, SafeAreaView, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import InlineTextButton from './InlineTextButton';
import React from 'react'
import AddaGoal from './AddaGoal';
import { useNavigation } from '@react-navigation/native'
import {auth, db} from "../firebase";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore"; 



const Goals = (navigation) => {
  let [modalVisible, setModalVisible] = React.useState(false);
  let [isLoading, setIsLoading] = React.useState(true);
  let [isRefreshing, setIsRefreshing] = React.useState(false);
  let [goals, setGoals] = React.useState([]);


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

  let checkGoalItem = (item, isChecked) => {
    const goalRef = doc(db, 'todos', item.id);
    setDoc(goalRef, { completed: isChecked }, { merge: true });
  };

  let deleteGoal = async (GoalId) => {
    await deleteDoc(doc(db, "todos", GoalId));
    let updatedToDos = [...goals].filter((item) => item.id != GoalId);
    setGoals(updatedToDos);
  };

  let renderToDoItem = ({item}) => {
    return (
      <View>
        <View>
          <BouncyCheckbox
            isChecked={item.complated}
            size={25}
            fillColor="#32CD32"
            unfillColor="#FFFFFF"
            text={item.text}
            iconStyle={{ borderColor: "#258ea6" }}
            onPress={(isChecked) => { checkGoalItem(item, isChecked)}}
          />
        </View>
        <InlineTextButton text="Delete" color="#258ea6" onPress={() => deleteGoal(item.id)} />
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

  let showSendVerificationEmail = () => {
    return (
      <View>
        <Text>Please verify your email to use ToDo</Text>
        <Button title="Send Verification Email" onPress={() => sendEmailVerification(auth.currentUser)} />
      </View>
    );
  };

  let addToDo = async (todo) => {
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
    
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style  ={styles.container}
    behavior="padding">


      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
          <AddaGoal
            onClose={() => setModalVisible(false)}
            addToDo={addToDo}/>

        </Modal>
      <View style = {{borderBottomWidth: 2, marginTop: 150}}>
          <Text title = "List of Goals" style = {{fontSize: 25, fontWeight: 'bold', marginTop: 20}}>List of Goals:</Text>
      </View>
      {/* <Button style = {styles.buttonContainer}title ="Add a Goal" color = 'orange' onPress = {() => setModalVisible(true)}></Button> */}

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
      backgroundColor: '#32CD32',
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