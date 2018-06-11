// @flow

import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from 'react-native-firebase';
import LoginScreen from './screens/LoginScreen';
import SignedInScreen from './screens/SignedInScreen';

type Props = {};

type State = {
  user: any,
  initializing: boolean
};

export default class UIContainer extends Component<Props, State> {
  state = {
    user: null,
    initializing: true
  };
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, initializing: false });
      } else {
        this.setState({ initializing: false, user: null });
      }
    });
  }
  render() {
    const { initializing, user } = this.state;
    if (initializing) {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ paddingTop: 8 }}>Initializing</Text>
        </View>
      );
    }
    if (!initializing && !user) {
      return <LoginScreen />;
    }
    return <SignedInScreen routeName="EducatorScreen" />;
  }
}
