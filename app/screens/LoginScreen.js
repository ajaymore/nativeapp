import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { material, systemWeights } from 'react-native-typography';
import { createStackNavigator } from 'react-navigation';
import GoogleAuth from '../components/auth/GoogleAuth';
import LoginForm from '../components/auth/LoginForm';
import PhoneAuth from '../components/auth/PhoneAuth';

const LoginScreen = () => (
  <View
    style={{
      flex: 1,
      marginTop: 100,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}
  >
    <Text style={[material.display3, systemWeights.bold, { marginBottom: 30 }]}>
      Cmca
    </Text>
    <GoogleAuth />
    <View>
      <Button
        buttonStyle={{
          width: 222,
          height: 44,
          marginTop: 15,
          backgroundColor: 'rgb(219, 68, 55)'
        }}
        icon={{
          name: 'email',
          type: 'material-community',
          size: 32,
          color: '#fff'
        }}
        title="Sign in with email"
        onPress={() => {
          this.props.navigation.navigate('LoginForm');
        }}
      />
    </View>
    <View>
      <Button
        buttonStyle={{
          width: 222,
          height: 44,
          marginTop: 15,
          backgroundColor: 'rgb(219, 68, 55)'
        }}
        icon={{
          name: 'phone',
          type: 'material-community',
          size: 32,
          color: '#fff'
        }}
        title="Phone Sign in"
        onPress={() => {
          this.props.navigation.navigate('PhoneAuth');
        }}
      />
    </View>
  </View>
);

export default createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  LoginForm: {
    screen: LoginForm,
    navigationOptions: ({ navigation }) => ({
      title: 'Login with email'
    })
  },
  PhoneAuth: {
    screen: PhoneAuth,
    navigationOptions: ({ navigation }) => ({
      title: 'Login with phone number'
    })
  }
});
