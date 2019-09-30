import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { List } from 'react-native-paper';

const ListPresentation: () => React$Node = (props) => {
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>

          <List.Section>
            <List.Subheader>Some title</List.Subheader>

            {props.items.map((item, i) => {
              return (
                <List.Item
                  key={i}
                  title={item}
                  left={() => <List.Icon icon="folder" />}
                />
              )
            })}
            
            <List.Item
              title="First Item"
              left={() => <List.Icon icon="folder" />}
            />
              <List.Item
                title="Second Item"
                left={() => <List.Icon color="#000" icon="folder" />}
            />
          </List.Section>

        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default ListPresentation;