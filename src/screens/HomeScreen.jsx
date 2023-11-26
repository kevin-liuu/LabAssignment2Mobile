import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';


export default function HomeScreen({navigation}){
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

    return(
        <MainLayout>
            <SafeAreaView>
                <Text>My To do list</Text>

                <ToDoList tasks={tasks}></ToDoList>
                {/* 2. pass addTask to component. Go to ToDoForm */}
                 <ToDoForm addTask={addTask}></ToDoForm>
                <Button
                title="Go to about"
                onPress={()=>navigation.navigate('About')}/>

            </SafeAreaView>
        </MainLayout>
    );
}