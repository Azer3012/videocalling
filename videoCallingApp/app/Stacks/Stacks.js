import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CallingScreen, Home, MemberList } from '../Screens'

const Stack=createNativeStackNavigator()

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='home'>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="callingScreen" component={CallingScreen}/>
        <Stack.Screen name="memberList" component={MemberList}/>
    </Stack.Navigator>
  )
}

export default Stacks

const styles = StyleSheet.create({})