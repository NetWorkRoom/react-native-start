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
