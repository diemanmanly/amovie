import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    input: {
        height: 40,
        width: 200,
        marginTop: 30,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'green',
        marginLeft: 60,
        borderRadius:10

    },
    button: {
        backgroundColor: "#007ad0",
        width: 200,
        marginLeft: 45,
        marginTop: 30,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    },
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});