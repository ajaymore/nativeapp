import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import firebase from 'react-native-firebase';
import {
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView,
  createStackNavigator
} from 'react-navigation';

const { height } = Dimensions.get('window');

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerLeft: (
        <View>
          <Icon
            name="menu"
            size={35}
            type="material-community"
            onPress={() => navigation.openDrawer()}
            containerStyle={{
              padding: 5,
              paddingLeft: 15,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          />
        </View>
      )
    };
  };
  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}

export default createStackNavigator({ HomeScreen: { screen: Home } });
