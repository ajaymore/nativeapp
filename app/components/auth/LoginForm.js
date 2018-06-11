import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import firebase from 'react-native-firebase';

const { width } = Dimensions.get('window');

class LoginForm extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={() =>
            Yup.object().shape({
              email: Yup.string()
                .required('Email is required!')
                .email(),
              password: Yup.string().required('Password is required!')
            })
          }
          onSubmit={async (
            values,
            { setSubmitting, setErrors /* setValues and other goodies */ }
          ) => {
            try {
              await firebase
                .auth()
                .signInAndRetrieveDataWithEmailAndPassword(
                  values.email,
                  values.password
                );
            } catch (error) {
              console.log(error);
              setSubmitting(false);
              if (error.code === 'auth/user-not-found') {
                setErrors({ service: 'We could not find this user!' });
              } else if (error.code === 'auth/wrong-password') {
                setErrors({
                  service: 'Seems like you entered wrong password!'
                });
              } else {
                setErrors({ service: 'We failed to authenticate you!' });
              }
            }
          }}
          render={({
            values,
            errors,
            touched,
            setFieldValue,
            handleSubmit,
            isSubmitting,
            setErrors
          }) => (
            <View
              style={{
                flex: 1
              }}
            >
              <View
                style={{
                  width,
                  alignItems: 'center',
                  padding: 15,
                  paddingTop: 25
                }}
              >
                {errors.service && (
                  <View>
                    <Text>{errors.service}</Text>>
                  </View>
                )}
                <Input
                  label="Email"
                  required
                  errorStyle={{ color: 'red' }}
                  errorMessage={touched.email && errors.email}
                  onChangeText={text => setFieldValue('email', text)}
                  placeholder="Enter email"
                  value={values.email}
                />
                <View style={{ height: 40 }} />
                <Input
                  label="Password"
                  errorStyle={{ color: 'red' }}
                  errorMessage={touched.password && errors.password}
                  onChangeText={text => setFieldValue('password', text)}
                  value={values.password}
                  placeholder="Enter password"
                  secureTextEntry
                />
                <Button
                  buttonStyle={{
                    width: width - 60,
                    height: 44,
                    marginTop: 40,
                    backgroundColor: 'rgb(219, 68, 55)'
                  }}
                  title="Login"
                  onPress={handleSubmit}
                />
                {/* <Link to="/login/sign-up">
                  <Typography>Sign up</Typography>
                </Link>
                <Link to="/login/forgot-password">
                  <Typography>Forgot password</Typography>
                </Link> */}
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default LoginForm;
