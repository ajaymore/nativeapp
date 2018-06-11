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
import HomeScreen from './HomeScreen';
import EducatorScreen from './EducatorScreen';
import MentorScreen from './MentorScreen';

const { height } = Dimensions.get('window');

const CustomDrawerContentComponent = props => (
  <SafeAreaView
    style={{
      flex: 1,
      justifyContent: 'space-between',
      height
    }}
    forceInset={{ top: 'always', horizontal: 'never' }}
  >
    <View>
      <Text style={{ padding: 15 }}>Hello, User</Text>
      <DrawerItems {...props} />
    </View>
    <View style={{ marginBottom: 20 }}>
      <Button
        buttonStyle={{}}
        titleStyle={{ color: '#000' }}
        clear
        title="Logout"
        onPress={() => {
          firebase.auth().signOut();
        }}
      />
    </View>
  </SafeAreaView>
);

export default ({ routeName }) => {
  const Drawer = createDrawerNavigator(
    {
      HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Home'
        })
      },
      EducatorScreen: {
        screen: EducatorScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Educator'
        })
      },
      MentorScreen: {
        screen: MentorScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Mentor'
        })
      }
    },
    {
      contentComponent: CustomDrawerContentComponent,
      initialRouteName: routeName
    }
  );
  return <Drawer />;
};
