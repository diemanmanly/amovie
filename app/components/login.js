import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, TextInput } from 'react-native';
import {styles} from "../assets/css/login"
export default class Login extends Component {

    render() {
        return (
            <View>
                <Image
                    style={styles.image}
                    source={require('../assets/images/avatar.png')}
                />
                <TextInput style={styles.input}
                           placeholder="Username"
                />
                <TextInput style={styles.input}
                           placeholder="Password"
                           secureTextEntry={true}
                />
            </View>
        )
    }
}