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
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


function App() {
 
  const[tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  //1. implment and pass addTask Function
  const addTask = (task) =>{
    //6. implement the addTask logic
    setTasks([...tasks, task])
  };

  return (
    <SafeAreaView>
     <ToDoList tasks={tasks} />
     {/* 2. pass addTask to component. Go to ToDoForm */}
     <ToDoForm addTask={addTask}></ToDoForm>
    </SafeAreaView>
  );
}

export default App;
