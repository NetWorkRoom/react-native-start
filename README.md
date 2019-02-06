## Создание мобильных приложений на основе [React Native]
Полезная информация для создания приложений на основе React Native

#### Первое приложение projectOne

##### Компоненты

Файл Nav.js
```javascript
// Подключаем модули React и React Native
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Инициализируем компонент Nav
const Nav = (props) => (
    <View style={styles.nav}>
        {/* Выводим название приложения из state */}
        <Text>{props.nameOfApp}</Text>
    </View>
);

// Создаем описание стилей оформления для элементов в приложении
const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#ddd'
    },
});

// Экспортируем компонент Nav
export default Nav;
```

Файл Generate.js
```javascript
// Подключаем модули React и React Native
import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

// Инициализируем компонент Generate
const Generate = (props) => (
    <TouchableWithoutFeedback // Добавляет эффект при касании кнопки
        onPress={() => {
            // По касанию кнопки запускаем метод props.add()
            // по сути в родительском компоненте onAddRandom()
            props.add()
        }}
    >
        {/* Кнопка Add number */}
        <View style={styles.generate}>
            <Text>Add number</Text>
        </View>
    </TouchableWithoutFeedback>
);

// Создаем описание стилей оформления для элементов в приложении
const styles = StyleSheet.create({
    generate: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#00bcd4',
        width: '100%',
        marginTop: 10,
        marginBottom: 5,
    }
});

// Экспортируем компнент Generate
export default Generate;
```

Файл ListItem.js
```javascript
// Подключаем модули React и React Native
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// Инициализируем компонент ListItem
const ListItem = (props) => {
    return (
        // Перебираем массив props.items и выводим на странице кнопки с числами
        props.items.map((item, i) => (
            <TouchableOpacity // Добавляет эффект при касании кнопки
                // По касанию кнопки запускаем метод props.delete()
                // по сути в родительском компоненте onItemDelete()
                // и удаляем выбранную кнопку
                onPress={ () => props.delete(i) }
                key={i} // Назначаем ключ каждому элементу
                style={styles.listitem}
            >
                {/* Кнопка текущего значения в массиве */}
                <View>
                    <Text>{item}</Text>
                </View>
            </TouchableOpacity>
        ))
    )
};

// Создаем описание стилей оформления для элементов в приложении
const styles = StyleSheet.create({
    listitem: {
        backgroundColor: '#cecece',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        margin: 5,
    }
});

// Экспортируем компнент ListItem
export default ListItem;
```

Файл App.js
```javascript
// Подключаем модули React и React Native
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

// Подключаем компоненты
import Nav from './src/Nav/Nav';
import Generate from './src/Generate/Generate';
import ListItem from './src/Generate/ListItem';

// Инициализируем класс App
class App extends Component {
  // Инициализируем state с полями - nameOfApp, random
  state = {
    nameOfApp: 'My awesome App', // Название приложения
    random: [20, 14] // Массив чисел
  };

  // Метод генерирует случаное новое значение и добавляет в state
  onAddRandom = () => {
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
          {/* Подключаем компонент Generate и передаем
          в него метод onAddRandom */}
          <Generate add={this.onAddRandom} />
          {/* Подключаем компонент ListItem и передаем в него
          метод onItemDelete и массив с числами random */}
          <ListItem
              delete={this.onItemDelete}
              items={this.state.random} />
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
});

// Экспортируем класс App
export default App;
```


[React Native]: https://facebook.github.io/react-native/
