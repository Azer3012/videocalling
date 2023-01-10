import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ZegoUIKitPrebuiltCall, { ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { useNavigation, useRoute } from '@react-navigation/native'

const CallingScreen = () => {
  const userId=String(Math.floor(Math.random()*100000))
  const route=useRoute()
  const navigation=useNavigation()

  const {callId}=route.params

  
  return (
    <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={1848575793}
                appSign={"d2cfe465c14ac3d6195408efb2a8511969d53cfd342f758fecaf320d741d39b9"}
                userID={userId} 
                userName={`user_${userId}`}
                callID={callId}

                config={{
                    
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { navigation.navigate('home') },
                    onHangUp: () => { navigation.navigate('home') },
                }}
            />
        </View>
  )
}

export default CallingScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})