import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import { ZegoStartCallInvitationButton } from '@zegocloud/zego-uikit-prebuilt-call-rn';

const Home = () => {
  const [userId, setUserId] = useState('');
  const [invitees, setInvitees] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
         
          value={userId}
          onChangeText={text => {
            setUserId(text);
            setInvitees(text.split(','));
          }}
          placeholder={'Invite Your Friend Please Enter All Id'}
          style={styles.input}
        />
        
        <View style={{alignItems: 'center'}}>
          <ZegoStartCallInvitationButton
            invitees={invitees} // ID of the invited user.
            isVideoCall={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    height: 30,
    borderWidth: 1,
    paddingLeft: 15,
    marginBottom: 10,
  },
  btn: {
    height: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: 'white',
  },
});
