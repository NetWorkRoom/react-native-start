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
