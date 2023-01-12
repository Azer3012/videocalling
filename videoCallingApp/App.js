import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from './app/Stacks/Stacks';
import {GROUP_VIDEO_CALL_CONFIG, GROUP_VOICE_CALL_CONFIG, ONE_ON_ONE_VIDEO_CALL_CONFIG, ONE_ON_ONE_VOICE_CALL_CONFIG, ZegoUIKitPrebuiltCallWithInvitation} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import ZegoUIKitSignalingPlugin from '@zegocloud/zego-uikit-signaling-plugin-rn';

const App = () => {
  const userID = `${String(Math.floor(Math.random() * 10000))}`;

  const userName = `user_${userID}`;
  return (
    <ZegoUIKitPrebuiltCallWithInvitation
      appID={1848575793}
      appSign={
        'd2cfe465c14ac3d6195408efb2a8511969d53cfd342f758fecaf320d741d39b9'
      }
      userID={userID} // userID can be something like a phone number or the user id on your own user system.
      userName={userName}
      ringtoneConfig={{
        incomingCallFileName: 'zego_incoming.mp3',
        outgoingCallFileName: 'zego_outgoing.mp3',
      }}
      requireConfig={data => {
        const config =
          data.invitees.length > 1
            ? ZegoInvitationType.videoCall === data.type
              ? GROUP_VIDEO_CALL_CONFIG
              : GROUP_VOICE_CALL_CONFIG
            : ZegoInvitationType.videoCall === data.type
            ? ONE_ON_ONE_VIDEO_CALL_CONFIG
            : ONE_ON_ONE_VOICE_CALL_CONFIG;
        return config;
      }}
      plugins={[ZegoUIKitSignalingPlugin]} // The signaling plug-in used for call invitation must be set here.
    >
      <Text
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          textAlign: 'center',
          color: 'black',
          fontWeight: 'bold',
        }}>
        UserId :- {userID}
      </Text>
      
        <Stacks />
      
    </ZegoUIKitPrebuiltCallWithInvitation>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
