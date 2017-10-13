import React from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import { Colors, Layout } from './constants';


export default class ModalExample extends React.Component {
  state = {
    modalVisible: false,
    animationType: 'none',
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal visible={false}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>>
          {/* <View /> */}
        </Modal>

        <Modal
          animationType={this.state.animationType}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View>
              <Touchable
                style={styles.button}
                onPress={() => {
                  this.setState({ modalVisible: false });
                }}>
                <Text style={styles.buttonText}>Hello World!</Text>
              </Touchable>

            </View>
          </View>
        </Modal>
        <Touchable
          style={styles.button}
          onPress={() => {
            this.setState({ modalVisible: true, animationType: 'slide' });
          }}>
          <Text style={styles.buttonText}>Say hello</Text>
        </Touchable>
        {Layout.isSmallDevice && <View style={{ marginBottom: 10 }} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.modalBackgroundColor
  },
  button: {
    flexGrow: 0,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.tintColor
  },
  buttonText: {
    color: '#fff',
  },
});
