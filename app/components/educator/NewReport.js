import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Axios from 'axios';
// import { graphql } from 'react-apollo';
import format from 'date-fns/format';
import includes from 'lodash/includes';
import uuid from 'uuid/v4';
import { withFormik } from 'formik';
import {
  string,
  shape,
  object,
  number,
  boolean,
  array,
  date,
  mixed
} from 'yup';
import { material } from 'react-native-typography';
import DatePicker from 'react-native-datepicker';

class NewReport extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Report'
  });
  render() {
    return (
      <View>
        <Text> New Report </Text>
      </View>
    );
  }
}

export default NewReport;
