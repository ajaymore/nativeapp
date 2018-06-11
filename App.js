/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { YellowBox } from 'react-native';
import UIContainer from './app/UIContainer';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Module RNGoogleSignin'
]);

export default () => <UIContainer />;
