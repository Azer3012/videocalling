import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CallingScreen, Home } from '../Screens'

const Stack=createNativeStackNavigator()

const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="callingScreen" component={CallingScreen}/>
    </Stack.Navigator>
  )
}

export default Stacks

const styles = StyleSheet.create({})