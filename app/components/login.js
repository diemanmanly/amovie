import React, {Component} from 'react';
import {AppRegistry, Text, View, Image, TextInput, Alert} from 'react-native';
import {styles} from "../assets/css/login"
import {Actions} from 'react-native-router-flux';
import {Button} from 'react-native-elements';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    }

    onPressLogin() {
        if (this.state.username && this.state.password) {
            if (this.state.username == "anntd" && this.state.password == "123456") {
                Alert.alert('Login is ok.');
                Actions.home();
            }
        } else {
            Alert.alert('Data is invalid.');
        }
    }

    render() {
        return (
            <View>
                <Image
                    style={styles.image}
                    source={require('../assets/images/avatar.png')}
                />
                <TextInput style={styles.input}
                           placeholder="Username"
                           onChangeText={(username) => this.setState({username})}
                />
                <TextInput style={styles.input}
                           placeholder="Password"
                           secureTextEntry={true}
                           onChangeText={(password) => this.setState({password})}
                />
                <Button
                    raised
                    icon={{name: 'input'}}
                    title='Login'
                    titleStyle={{
                        fontWeight: "700"
                    }}
                    buttonStyle={styles.button}
                    onPress={this.onPressLogin.bind(this)}/>
            </View>
        )
    }
}