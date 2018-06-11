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
import NewReport from '../components/educator/NewReport';

const { height } = Dimensions.get('window');

class Educator extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Educator',
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
      <View style={{ flex: 1 }}>
        <View style={{ position: 'absolute', bottom: 15, right: 15 }}>
          <Icon
            raised
            name="new-message"
            size={32}
            type="entypo"
            color="blue"
            onPress={() => {
              this.props.navigation.navigate('NewReportScreen');
            }}
          />
        </View>
      </View>
    );
  }
}

export default createStackNavigator({
  EducatorScreen: { screen: Educator },
  NewReportScreen: { screen: NewReport }
});
