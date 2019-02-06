## Создание мобильных приложений на основе [React Native]
Полезная информация для создания приложений на основе React Native

#### Первое приложение projectOne

##### Пример использования StyleSheet

```javascript
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: '#f00', width: '100%'}}>
                    <Text style={styles.white}>Text for view 1</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.white}>Text for view 1</Text>
                    <Text style={styles.white}>Text for view 1</Text>
                </View>
                <View style={{width: '100%'}}>
                    <Text style={styles.red}>just red</Text>
                    <Text style={styles.bigBlue}>just bigBlue</Text>
                    <Text style={[styles.bigBlue, styles.green]}>bigBlue, then green</Text>
                    <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        backgroundColor: '#ffeafb',
        marginTop: 20,
    },
    view2: {
        backgroundColor: '#00f',
        color: '#00ffff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    white: {
        color: '#ffffff',
        fontSize: 30,
        padding: 20,
    },
    red: {
        color: '#ff0000',
    },
    green: {
        color: '#09ff00',
    },
});

export default App;

```

[React Native]: https://facebook.github.io/react-native/
