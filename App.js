import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Login from './app/components/login';
import HomeScreen from './app/screens/home';
import SettingsScreen from './app/screens/settings';
// import {Router, Scene} from 'react-native-router-flux';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left, Body} from 'native-base';

export default class App extends React.Component {
    render() {
        return (
            <MyApp/>

        );
    }
}

const customDrawerContentComponent = (props) => (
    <Container>
        <Header style={{height: 200, backgroundColor: 'white'}}>
            <Body>
            <Image
                style={styles.drawerImage}
                source={require('./app/assets/images/unnamed.jpg')}/>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
)

const MyApp = DrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Setting: {
        screen: SettingsScreen
    }
}, {
    initialRouteName: 'Home',
    drawerPosition: "Left",
    contentComponent: customDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    }
});
