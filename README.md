## Создание мобильных приложений на основе [React Native]
Полезная информация для создания приложений на основе React Native

### React Navigation - https://reactnavigation.org/en/ 

Подключение React Navigation
```javascript
yarn add react-navigation
yarn add react-native-gesture-handler
react-native link react-native-gesture-handler
```

Добавляем в файл MainActivity.java
```javascript
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```
Открываем в Android Studio папку android и обновляем Gradle!  

Пример для проверки  
Файл - App.js 
```javascript
import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeComponent from './src/Home'
import ProfileComponent from './src/Profile'

const AppNavigator = createStackNavigator(
    {
      Home: HomeComponent,
      Profile: ProfileComponent
    },
);

const App = createAppContainer(AppNavigator);

export default App;
``` 
Файл - Home.js  
```javascript
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
```
Файл - Profile.js 
```javascript
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
``` 



[React Native]: https://facebook.github.io/react-native/
