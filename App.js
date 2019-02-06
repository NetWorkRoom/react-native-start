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
