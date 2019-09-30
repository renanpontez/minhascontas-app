import React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const AddExpensePresentation = (props) => {
  return (
    <Provider>
        <Portal>
          <Modal visible={props.visible} onDismiss={props.toggleModal}>
            <Text>Example Modal</Text>
          </Modal>
        </Portal>
    </Provider>
  );
}

export default AddExpensePresentation;