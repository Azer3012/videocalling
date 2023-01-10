import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const [randomId,setRandomId]=useState(null)
    const navigation=useNavigation()
    const joinMeeting=()=>{
        if(randomId.length>5){
            navigation.navigate('callingScreen',{callId:randomId})
        }
        else {
            alert('enter valid id')
        }
    }
    const generateRandomId=()=>{
        return `${Math.floor(Math.random()*10000)}-${Math.floor(Math.random()*10000)}`
    }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={setRandomId} value={randomId} placeholder='name' style={styles.input}/>
        <TouchableOpacity onPress={joinMeeting} style={styles.btn}>
            <Text style={styles.btnText}>Join meeting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            const id=generateRandomId()
            setRandomId(id)
        }} style={styles.btn}>
            <Text style={styles.btnText}>Generate meeting id</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        width:'100%',
        paddingHorizontal:20

    },
    input:{
        height:30,
        borderWidth:1,
        paddingLeft:15,
        marginBottom:10
    },
    btn:{
        height:30,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    btnText:{
        color:'white'
    }
})