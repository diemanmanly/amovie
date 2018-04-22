import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/components/login';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
        <Router>
            <Scene
                key="login"
                component={Login}
                title="Login"
                initial
            >

            </Scene>
        </Router>
      //   <View style={styles.container}>
      //     <Login />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
