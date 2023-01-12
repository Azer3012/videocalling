import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { ZegoStartCallInvitationButton } from '@zegocloud/zego-uikit-prebuilt-call-rn';

const index = () => {
  return (
    <View>
      <ZegoStartCallInvitationButton
        invitees={['the_user_id_of_invitee']}
        isVideoCall={true}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
