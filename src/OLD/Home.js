import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./assets/logo.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}

class HomeComponent extends Component {

    static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
            />
        ),
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}

export default HomeComponent;
