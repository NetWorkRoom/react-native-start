// Подключаем модули React и React Native
import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

// Инициализируем компонент Generate
const Generate = (props) => (
    <TouchableWithoutFeedback // Добавляет эффект при касании кнопки
        // onPress={() => alert('Touched')}
        // onLongPress={() => alert('Long Touched')}
        // onPressIn={() => alert('Touched')}
        // onPressOut={() => alert('Touched')}
        // delayLongPress={5000}
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
