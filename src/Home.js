import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class HomeComponent extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="See Profile"
                    onPress={() => {
                        navigate('Profile')
                    }}
                />
            </View>
        );
    }
}

export default HomeComponent;
