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

  return (
    <SafeAreaView>
     <ToDoList tasks={tasks} />
     <ToDoForm></ToDoForm>
    </SafeAreaView>
  );
}

export default App;
