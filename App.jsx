/**
 * My To Do List App
 *
 * @format
 */


import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoForm from './src/components/ToDoForm';
import ToDoList from './src/components/ToDoList';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";


const Stack = createNativeStackNavigator();

function App() {
 
  // const[tasks, setTasks] = React.useState([
  //   'Do laundry',
  //   'Go to gym',
  //   'Walk dog'
  // ]);
  // //1. implment and pass addTask Function
  // const addTask = (task) =>{
  //   //6. implement the addTask logic
  //   setTasks([...tasks, task])
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='About' component={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView>
    //  <ToDoList tasks={tasks} />
    //  {/* 2. pass addTask to component. Go to ToDoForm */}
    //  <ToDoForm addTask={addTask}></ToDoForm>
    // </SafeAreaView>
  );
}

export default App;
