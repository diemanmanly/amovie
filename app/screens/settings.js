import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Icon, Button, Container, Header, Content, Left} from 'native-base';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Image source={require('../assets/images/setting.png')} style={{height: 24, width: 24}}/>
        )
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
                    </Left>
                </Header>
                <Content contentContainerStyle={{flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text>Settings Screen</Text>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        color: 'green'
    }
});