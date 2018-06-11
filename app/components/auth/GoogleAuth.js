import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

class GoogleAuth extends Component {
  state = {
    loginProgress: false
  };

  componentDidMount() {
    this.configureGoogleSignin();
  }

  async configureGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        offlineAccess: false,
        iosClientId:
          '271975376738-lqkmmk7qvv0l9v26mec9qklu33mm5b0j.apps.googleusercontent.com'
      });
      GoogleSignin.currentUserAsync()
        .then(async user => {
          if (user) {
            await GoogleSignin.signOut();
          }
        })
        .done();
    } catch (err) {
      console.log('Play services error', err.code, err.message);
    }
  }

  googleLogin = async () => {
    this.setState({ loginProgress: true });
    try {
      const data = await GoogleSignin.signIn();
      const credential = firebase.auth.GoogleAuthProvider.credential(
        data.idToken,
        data.accessToken
      );
      const currentUser = await firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential);
    } catch (e) {
      this.setState({ loginProgress: false });
      console.error(e);
    }
  };
  render() {
    const { loginProgress } = this.state;
    if (loginProgress) {
      return (
        <View
          style={{
            height: 60,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <ActivityIndicator size="large" />
          <Text>Loggin In</Text>
        </View>
      );
    }
    return (
      <View>
        <GoogleSigninButton
          style={{ width: 230, height: 48 }}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.googleLogin}
        />
      </View>
    );
  }
}

export default GoogleAuth;
