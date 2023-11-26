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

export default function AboutScreen({navigation}){
    return(
        <MainLayout>
            <SafeAreaView>
                <Text>Contact Us</Text>
                <Text>Send us a Message!</Text>
                
                <Button title='Submit'/>
        
            </SafeAreaView>
        </MainLayout>
    );
}