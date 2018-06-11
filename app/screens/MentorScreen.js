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

class Mentor extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Mentor',
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
    });
  render() {
    return (
      <View>
        <Text> MentorScreen </Text>
      </View>
    );
  }
}

export default createStackNavigator({ MentorScreen: { screen: Mentor } });
