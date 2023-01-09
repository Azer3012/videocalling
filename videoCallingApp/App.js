import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ZegoUIKitPrebuiltCall, { ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

const App = () => {
  const userId=String(Math.floor(Math.random()*100000))
  return (
    <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={1848575793}
                appSign={"d2cfe465c14ac3d6195408efb2a8511969d53cfd342f758fecaf320d741d39b9"}
                userID={userId} 
                userName={`user_${userId}`}
                callID={"group123"}

                config={{
                    
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    // onOnlySelfInRoom: () => { props.navigation.navigate('HomePage') },
                    // onHangUp: () => { props.navigation.navigate('HomePage') },
                }}
            />
        </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})