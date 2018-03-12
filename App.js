/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Taplytics from 'taplytics-react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

makeid = (num) => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < num; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid(33));

getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const a_guid = '5dfd-' + getRandomIntInclusive(1019181715, 393837363536) + '-fsad-' + getRandomIntInclusive(1019181715, 393837363536);
const a_user = makeid(12) + '' + makeid(19);
const a_email = makeid(12) + '' + "@someaddress.com";
const a_gender = (getRandomIntInclusive(1,20) % 2)? "male" : "female";

const attributes = {
  "email": a_email,
  "name": a_user,
  "user_id": a_guid,
  "age": 22,
  "gender": a_gender,
  "avatarurl": "https://someurl.com/someavatar3.png",
  "customData": {
    "someCustomAttribute": 11,
    "paidSubscriber": false,
    "subscriptionPlan": "yearly"
  }
}

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    Taplytics.resetAppUser();
    Taplytics.setUserAttributes(attributes);
  }

  onPressTitle = () => {
    console.log('event clicke3d')
    Taplytics.logEvent("eventName", 5, {"xo custom attribute": "some important xo data"})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text onPress={this.onPressTitle}>
          {"click to send an event"}{'\n'}{'\n'}
          {'attributes:' + attributes}
        </Text>
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
});
