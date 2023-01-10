import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stacks from './app/Stacks/Stacks'

const App = () => {
 
  return (
    <NavigationContainer>

      <Stacks/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})