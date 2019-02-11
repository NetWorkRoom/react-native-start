import React, {Component} from 'react';
import {Text, View} from 'react-native';

class ProfileComponent extends Component {
    static navigationOptions = {
        title: 'Profile'
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
           </View>
        );
    }
}

export default ProfileComponent;
