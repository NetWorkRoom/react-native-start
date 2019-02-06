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
