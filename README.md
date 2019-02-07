## Создание мобильных приложений на основе [React Native]
Полезная информация для создания приложений на основе React Native

#### Первое приложение projectOne

##### ScrollView, Picker, ActivityIndicator и Slider
Пример с использованием элементов из React Native - ScrollView  
Файл App.js
```javascript
// Подключаем модули React и React Native
import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

// Подключаем компоненты
import Nav from './src/Nav/Nav';
import Generate from './src/Generate/Generate';
import ListItem from './src/Generate/ListItem';
import Input from './src/Input/Input';

// Инициализируем класс App
class App extends Component {
  // Инициализируем state с полями - nameOfApp, random
  state = {
    nameOfApp: 'My awesome App', // Название приложения
    random: [20, 14] // Массив чисел
  };

  // Метод генерирует случаное новое значение и добавляет в state
  onAddRandom = () => {
    // alert('add random')
    // Генерируем новое значение
    let random = Math.floor(Math.random() * 100) + 1;
    // Добвляем в массив random в state новое значение
    this.setState(prevState => {
      return {
        random: [...prevState.random, random]
      }
    });
  };

  // Метод удаляет выбраное значение в массиве random
  onItemDelete = (i) => {
    // alert('delete item');
    // alert(i);
    // Создаем новый массив в котором нет удаляемого значения
    let newArray = this.state.random.filter((item, index) => {
      return index !== i;
    });
    // Заменяем значения массива в state на новые
    this.setState({random: newArray});
  };

  // Отправляем на рендер компонеты
  render() {
    return (
      <View style={styles.container}>
          {/* Подключаем компонент Nav и передаем
          в него название приложения из state */}
          <Nav nameOfApp={this.state.nameOfApp}/>
          {/* Оборачиваем контент ScrollView для получения 
          возможности скролить контент на странице */}
          <ScrollView
              // onContentSizeChange={(w,h) => alert(h)} // Срабатывает при изменении размера
              // onMomentumScrollBegin={() => alert('begin')} // Срабатывает при начале скролинга
              // onMomentumScrollEnd={() => alert('end')} // Срабатывает после окончания скролинга
              onScroll={() => alert('scrolling')}
              style={{width: '100%'}}
          >
            <View style={styles.wrapper}>
                {/* Подключаем компонент Generate и передаем
                в него метод onAddRandom */}
                <Generate add={this.onAddRandom} />
                {/* Подключаем компонент ListItem и передаем в него
                метод onItemDelete и массив с числами random */}
                <ListItem
                    delete={this.onItemDelete}
                    items={this.state.random} />

                <Input/>
            </View>
          </ScrollView>
      </View>
    );
  }
}

// Создаем описание стилей оформления для элементов в приложении
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  wrapper: {
    flex:1,
    width: '100%',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

// Экспортируем класс App
export default App;
```
Пример с использованием элементов из React Native - Picker и Slider
Файл Picker.js
```javascript
// Подключаем модули React и React Native
import React, { Component } from 'react';
import {StyleSheet, Text, View, Picker, Slider} from 'react-native';

class PickerComponent extends Component {

    state = {
        language: 'english', // Значение по умолчанию в Picker
        sliderValue: 0 // Значение по умолчанию в Slider
    };

    render() {
        return (
            <View style={{width: '100%'}}>
                {/* Picker позволяет менять значение из набора значений */}
                <Picker
                    style={{width: '100%'}}
                    selectedValue={this.state.language} // Значение по умолчанию
                    // Меняем на выбранное значение
                    onValueChange={(value, index) => this.setState({language: value})}
                >
                    {/* Список значений */}
                    <Picker.Item label="Spanish" value="spanish" />
                    <Picker.Item label="English" value="english" />
                </Picker>
                {/* Slider позволяет менять значение из диапазон значений */}
                <Slider
                    style={{width: '100%'}}
                    minimumValue={0} // Минимально допустимое значение
                    maximumValue={50} // Максимально допустимое значение
                    value={this.state.sliderValue} // Значение по умолчанию
                    // Меняяем текущее значение двигая ползунок
                    onValueChange={(value)=> this.setState({ sliderValue: Math.round(value)})}
                />
                {/* Выводим текущее значение в Slider */}
                <Text>Value: {this.state.sliderValue}</Text>

            </View>
        )
    }
}

// Создаем описание стилей оформления для элементов в приложении
const styles = StyleSheet.create({

});

// Экспортируем компонент PickerComponent
export default PickerComponent;
```

Пример с использованием элементов из React Native - ActivityIndicator
Файл App.js
```javascript
// Подключаем модули React и React Native
import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator} from 'react-native';

// Подключаем компоненты
import Nav from './src/Nav/Nav';
import Generate from './src/Generate/Generate';
import ListItem from './src/Generate/ListItem';
import Input from './src/Input/Input';
import PickerComponent from './src/Picker/Picker';

// Инициализируем класс App
class App extends Component {
  // Инициализируем state с полями - nameOfApp, random
  state = {
    nameOfApp: 'My awesome App', // Название приложения
    random: [20, 14], // Массив чисел
    loading: false
  };

  // Метод генерирует случаное новое значение и добавляет в state
  onAddRandom = () => {
    // alert('add random')
    // Генерируем новое значение
    let random = Math.floor(Math.random() * 100) + 1;
    // Добвляем в массив random в state новое значение
    this.setState(prevState => {
      return {
        random: [...prevState.random, random]
      }
    });
  };

  // Метод удаляет выбраное значение в массиве random
  onItemDelete = (i) => {
    // alert('delete item');
    // alert(i);
    // Создаем новый массив в котором нет удаляемого значения
    let newArray = this.state.random.filter((item, index) => {
      return index !== i;
    });
    // Заменяем значения массива в state на новые
    this.setState({random: newArray});
  };

  // Отправляем на рендер компонеты
  render() {
    return (
      <View style={styles.container}>
          {/* Подключаем компонент Nav и передаем
          в него название приложения из state */}
          <Nav nameOfApp={this.state.nameOfApp}/>
          {/* Оборачиваем контент ScrollView для получения
          возможности скролить контент на странице */}
          <ScrollView
              // onContentSizeChange={(w,h) => alert(h)} // Срабатывает при изменении размера
              // onMomentumScrollBegin={() => alert('begin')} // Срабатывает при начале скролинга
              // onMomentumScrollEnd={() => alert('end')} // Срабатывает после окончания скролинга
              onScroll={() => alert('scrolling')}
              style={{width: '100%'}}
          >
            <View style={styles.wrapper}>
                {/* Подключаем компонент Generate и передаем
                в него метод onAddRandom */}
                <Generate add={this.onAddRandom} />
                {/* Подключаем компонент ListItem и передаем в него
                метод onItemDelete и массив с числами random */}
                <ListItem
                    delete={this.onItemDelete}
                    items={this.state.random} />

                {/*<Input/>*/}

                <PickerComponent />

                <ActivityIndicator
                  size="large"
                  color="red"
                  animating={this.state.loading}
                />

            </View>
          </ScrollView>
      </View>
    );
  }
}

// Создаем описание стилей оформления для элементов в приложении
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  wrapper: {
    flex:1,
    width: '100%',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

// Экспортируем класс App
export default App;
```

[React Native]: https://facebook.github.io/react-native/
