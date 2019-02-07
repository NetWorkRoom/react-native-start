// Подключаем модули React и React Native
import React, { Component } from 'react';
import {StyleSheet, TextInput, Button, Text, View} from 'react-native';

class Input extends Component {

    state= {
        myInput: '', // Текущее значение поля ввода текста
        users: ['John', 'James','Francis', 'Lisa', 'Martha', 'Steve'] // Массив с именами
    };

    // Метод добавляет символы в поле state.myInput
    onChangeInput = (value) => {
        // alert(value)
        this.setState({ myInput: value})
    };

    // Метод добавляет новые записи в поле с массивом state.users
    onAddUser = () => {
        this.setState(prevState => {
            return {
                myInput: '',
                users: [...prevState.users, prevState.myInput]
            }
        })
    };

    render() {
        return (
            <View style={styles.inputWrapper}>
                {/* Поле ввода для новых записей */}
                <TextInput
                    onChangeText={this.onChangeInput} // добавляем в state новые символы
                    style={styles.input}
                    value={this.state.myInput} // Текущее значение поля ввода текста
                    multiline={false}  // Многострочный режим
                    maxLength={100} // Максимальное количество символов
                    editable={true} // Разрешение на редактирование
                    // autoCapitalize={'characters'} // Автоматический Capitalize символов
                    autoCapitalize={'words'} // Автоматический Capitalize слов
                />
                {/* Клик по кнопке добавляет новую запись в список */}
                <Button
                    title="Add users"
                    onPress={this.onAddUser}
                />
                {/* Выводим список с именами - this.state.users */}
                <View  style={styles.list}>
                    {
                        this.state.users.map((item, index) => (
                            <Text style={styles.users} key={index}>{item}</Text>
                        ))
                    }
                </View>
            </View>

        );
    }
}

// Создаем описание стилей оформления для элементов в приложении
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#f2f2f2',
        fontSize: 20,
        marginTop: 20,
        padding: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#d0d0d0',
        marginBottom: 10,
    },
    list: {
        marginTop: 10,
    },
    inputWrapper: {
        width: '100%',
    },
    users: {
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#cecece',
        marginBottom: 5,
    }
});

// Экспортируем компонент Input
export default Input;
