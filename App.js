/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationBar from 'react-native-navbar';
//import PhotoGrid from './icon';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class YasamFirstApp extends Component<Props> {
  render() {
    return (
      <View style={styles.header}>
        <NavigationBar
          title={titleConfig}
          style={{ backgroundColor: "#f8d568", }}
          rightButton={rightButtonConfig}
          statusBar={{ tintColor: "#f8c968", }}
        />
        <View style={styles.container}>
          <Text style={styles.welcome}>
          Welcome to Yasam's React Native! It's so cool
          </Text>
          <Text style={styles.instructions}>
          yasam To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
          {instructions}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
    flex: 1,
  },
});

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'Hello, world',
  tintColor: 'black',
};
