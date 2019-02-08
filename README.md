## Создание мобильных приложений на основе [React Native]
Полезная информация для создания приложений на основе React Native

#### Первое приложение projectOne

##### Image и Modal
Пример с использованием элементов из React Native - Image
```javascript
// Подключаем модули React и React Native
import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';

// Инициализируем класс App
class App extends Component {
    // Отправляем на рендер компонеты
    render() {
        return (
            <View> 
                <Image
                    source={Mountains}
                    style={styles.mountains}
                    resizeMode="contain"
                    onLoadEnd={() => alert('Image loaded')}
                />

                <Image
                    source={{uri: 'https://picsum.photos/400/400'}}
                    style={styles.mountains}
                    resizeMode="contain"
                    onLoadEnd={() => alert('Image loaded')}
                />

            </View>  
        );
    }
}

// Создаем описание стилей оформления для элементов в приложении
const styles = StyleSheet.create({
    mountains: {
    width: '100%',
    height: 300,
    marginTop: 20
  }
});

// Экспортируем класс App
export default App;            
```
Пример с использованием элементов из React Native - Modal
```javascript
// Подключаем модули React и React Native
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Modal} from 'react-native';

class ModalComponent extends Component {

   state={
       modal: false
   };

   handleModal = () => {
        this.setState({
            modal: !this.state.modal ? true : false
        })
   };

   render() {
        return (
            <View style={{width: '100%'}}>

                <Button
                    title="Open Modal"
                    onPress={this.handleModal}/>

                <Modal
                    visible={this.state.modal}
                    animationType={'slide'}
                    onShow={() => alert('Modal is visible')}>
                    <View style={{marginTop: 20,backgroundColor: 'red'}}>

                        <Text>My modal component</Text>

                        <Button
                            title="Close Modal"
                            onPress={this.handleModal} />

                    </View>
                </Modal>

            </View>
        );
    }
}

// Создаем описание стилей оформления для элементов в приложении
const styles = StyleSheet.create({

});

// Экспортируем компонент Input
export default ModalComponent;

```

[React Native]: https://facebook.github.io/react-native/
