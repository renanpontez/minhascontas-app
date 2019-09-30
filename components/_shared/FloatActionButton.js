import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const FloatActionButton = (props) => (
  <FAB
    style={styles.fab}
    icon="add"
    onPress={() => props.onClick()}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default FloatActionButton;