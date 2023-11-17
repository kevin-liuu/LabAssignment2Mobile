import React from 'react';
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
//3. destructure addTask and pass into argument
export default function ToDoForm({addTask}){
  //4. use state to manage input filed
  const [taskText, setTaskText] = React.useState('');

    return(
        <View style={styles.form}>
                {/* 5. manage event handling in the TextInput and Button field. GO back to App.jsx */}
                <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text)=>setTaskText(text)}
                value={taskText}
                />
                <Button title="Add"  onPress={()=>addTask(taskText)}
                />
        </View>
    );
}


const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
      }
})