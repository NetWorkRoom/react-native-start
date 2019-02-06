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
